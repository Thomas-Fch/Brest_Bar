import Image from "next/image";
import React from "react";
import Cross from "../../public/images/Cross.svg";
import { useVisibleStore } from '../../store/useVisibleStore';

export const Close: React.FC = () => {
    const { isModalVisible, setIsModalVisible } = useVisibleStore();
    return (
        <button className='absolute right-4 top-4 '
            onClick={() => setIsModalVisible(!isModalVisible)}>

            <Image
                alt="Croix"
                src={Cross}
                style={{
                    width: '20px',
                    height: 'auto',
                }} />
        </button>

    )
}