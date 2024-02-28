
import { useMapZoomStore } from '@/store/useMapZoom';
import Image from "next/image";
import React from 'react';
import Eye from "../../../../public/images/Eye.svg";
interface zoomOnMapButtonProps {
    coordinates: [number, number];
}

export const ZoomOnMapButton: React.FC<zoomOnMapButtonProps> = ({
    coordinates,
}) => {
    const { setZoom } = useMapZoomStore();

    const handleClick = (coordinates: [number, number]) => {
        setZoom(coordinates);
    };
    return (
        <button className='rounded-full bg-purple-500 p-2 hover:brightness-110' onClick={() => handleClick(coordinates)}>

            <Image
                className=''
                alt="oeil"
                src={Eye}
                style={{
                    width: '16px',
                    height: 'auto',
                }}
            />
        </button>
    );
};