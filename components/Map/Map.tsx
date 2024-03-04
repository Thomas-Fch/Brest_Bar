import { BarApiData } from '@/lib/GetBarsApiData';
import { useDataFilterStore } from '@/store/useDataFilter';
import { useFetch } from '@/store/useFetch';
import { useMapZoomStore } from '@/store/useMapZoom';
import { useUserLocation } from '@/store/useUserLocation';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useEffect, useState } from 'react';
import { Loader } from '../Loader/Index';

export default function MapBox() {
    const [map, setMap] = useState<mapboxgl.Map>();
    const mapNode = React.useRef(null);

    const allData = true;

    const [loading, setLoading] = useState(true);
    const { userLocation } = useUserLocation();
    const establishments = useFetch(allData);
    const { apiData } = establishments;
    const { zoom } = useMapZoomStore();
    const { search } = useDataFilterStore();
    let colorToPick: string;
    switch (search) {
        case 'Cave':
            colorToPick = '#8A1630';
            break;
        case 'Brasserie':
            colorToPick = '#FDC551';
            break;
        case 'Bar':
            colorToPick = '#FE5C6B';
            break;
        case 'Jeux':
            colorToPick = '#55C8D4';
            break;
        case 'Dansant':
            colorToPick = '#C110C7';
            break;
        default:
            colorToPick = '#7D47AE';
            break;
    }

    useEffect(() => {
        const node: any = mapNode.current;
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
        const fetchData = async () => {
            setLoading(true);

            if (typeof window === 'undefined' || node === null) return;

            const mapboxMap = new mapboxgl.Map({
                container: node,
                accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
                style: 'mapbox://styles/mapbox/dark-v11',
                center: [-4.4834526, 48.3831122],
                zoom: zoom[0] === 0 ? 9.5 : 22,
            });

            const nav = new mapboxgl.NavigationControl({
                visualizePitch: true
            });
            mapboxMap.addControl(nav, 'bottom-right',);

            if (userLocation !== null) {
                const geolocateControl = new mapboxgl.GeolocateControl({
                    positionOptions: {
                        enableHighAccuracy: true,
                    },
                    trackUserLocation: true,
                    showAccuracyCircle: false,
                    showUserHeading: true,
                });
                mapboxMap.addControl(geolocateControl, 'bottom-right');
            }

            setMap(mapboxMap);
            apiData?.map((establishment: BarApiData) => {
                const { name, address, location, international_phone_number } =
                    establishment;
                const { coordinates } = location;

                if (coordinates && coordinates.length === 2) {
                    const markerElement = document.createElement('div');
                    markerElement.style.width = '20px';
                    markerElement.style.height = '20px';
                    markerElement.style.borderRadius = '50%';
                    markerElement.style.background = colorToPick;
                    markerElement.style.border = '3px solid #111111';
                    const marker = new mapboxgl.Marker({
                        element: markerElement,
                    })
                        .setLngLat(coordinates)
                        .setPopup(
                            new mapboxgl.Popup({ closeOnClick: true }).setHTML(
                                `<div style="color: black"><h2 style="color: #b063f2; font-size: 16px; font-weight: bold; text-decoration: underline;",  >${name}</h2><p>${address}</p><p>${international_phone_number}</p>
              </div>`
                            )
                        )
                        .addTo(mapboxMap);
                    {
                        zoom[0] !== 0 &&
                            mapboxMap.flyTo({
                                duration: 350,
                                center: zoom,
                                zoom: 16,
                                essential: true,
                            });

                    }

                }
                else {
                    console.error('Invalid coordinates:', coordinates);
                }
            });

            setLoading(false);
        };

        fetchData();
    }, [zoom, apiData, colorToPick, userLocation]);

    return (
        <>
            {loading && (
                <div className='flex size-full items-center justify-center bg-[#1f1f1f] pl-[35rem] pt-10'>
                    <Loader />
                </div>
            )}
            <div ref={mapNode} style={{ width: '100%', height: '100%' }} />
        </>
    );
}