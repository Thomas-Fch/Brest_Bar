import Image from 'next/image';
import React from 'react';
import cheers from '../../public/images/Cheers.svg';

export const Title: React.FC = () => {
    return (
        <div className="flex items-center gap-4">

            <Image
                alt="bières qui s'entre choc  "
                src={cheers}
                style={{
                    width: '28px',
                    height: 'auto',
                }} />

            <h3 className="text-xl "
                style={{
                    backgroundImage: 'linear-gradient(90deg, rgba(193, 16, 199, 1) 0%, rgba(181, 107, 247, 1) 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                }}>
                <span className="text-white hover:text-pink-500">Brest</span> bar
            </h3>

        </div >
    );
};