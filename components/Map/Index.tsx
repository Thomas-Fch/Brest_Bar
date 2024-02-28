"use client"

import { useUserLocation } from '@/store/useUserLocation'
import 'mapbox-gl/dist/mapbox-gl.css'
import React from 'react'
import MapBox from "./Map"

export default function Map() {

    const { setUserLocation } = useUserLocation();

    React.useEffect(() => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const newLocation: [number, number] = [
                        position.coords.latitude,
                        position.coords.longitude,
                    ];

                    setUserLocation(newLocation);
                },
                (error) => {
                    console.error('Error getting user location:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, [setUserLocation]);

    return (
        <>
            <MapBox />
        </>
    )
}
