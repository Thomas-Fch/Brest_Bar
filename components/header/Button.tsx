'use client';
import Image from 'next/image';
import React from 'react';
import Note from '../../public/images/Note.svg';
import { useVisibleStore } from '../../store/useVisibleStore';

export interface IHandleModalClick {
    onClick: () => void;
}

export const Button: React.FC = () => {
    const { isModalVisible, setIsModalVisible } = useVisibleStore();
    return (
        <button className=' rounded bg-[#C110C7] p-2 hover:brightness-110 active:bg-fuchsia-800 ' onClick={() => setIsModalVisible(!isModalVisible)} >
            <span className='flex items-center gap-2 text-sm font-bold text-white'>
                <Image
                    alt="notes et crayon"
                    src={Note}
                    style={{
                        width: '20px',
                        height: 'auto',
                    }} />
                Faire une demande
            </span>
        </button>
    )

}