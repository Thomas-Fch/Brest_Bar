import Image from "next/image";
import React from "react";
import Cross from "../../public/images/Cross.svg";
import { useOpenModal } from '../../store/OpenModalStore';

export const Close: React.FC = () => {
    const toggle = useOpenModal((e) => e.toggle);
    return (
        <button className='absolute right-4 top-4 '
            onClick={toggle}>

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