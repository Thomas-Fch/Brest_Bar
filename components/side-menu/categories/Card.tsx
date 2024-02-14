'use client';
import useSearchAndFilter from '@/store/useSearchAndFilter';
import Image from 'next/image';
import { categories } from "../../../utils/categories";

interface CardProps {
    onClick: () => void;
}

export const Card: React.FC<CardProps> = ({ onClick }) => {

    const { active, handleCardClick } = useSearchAndFilter();

    return (
        <div className='mt-4 flex justify-evenly' onClick={onClick}>
            {categories.map((item) => {
                const { name, img, alt } = item;
                return (
                    <button
                        type='button'
                        className='flex cursor-pointer flex-col items-center gap-2'
                        key={name}
                        onClick={() => handleCardClick(name)}
                    >
                        <Image
                            alt={alt}
                            src={img}
                            style={{
                                width: '90%',
                                height: 'auto',
                                padding: '1.25rem',
                                borderRadius: '10px',
                                backgroundColor: active === name ? '#272727' : '#2C2C2C',
                            }}
                        />
                        <p className='text-xs font-bold' style={{ color: active === name ? "#7D47AE" : "#FFFF" }}>{name}</p>
                    </button>
                )
            })}
        </div>
    );
}
