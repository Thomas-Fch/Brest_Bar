import Image from 'next/image';
import { useState } from 'react';
import { categories } from "../../../utils/categories";

export const Card: React.FC = () => {
    const [active, setActive] = useState(null);

    const handleSelected = (index: any) => {
        setActive((prevIndex) => {
            const newIndex = prevIndex === index ? null : index;
            return newIndex;
        });
    };

    return (
        <div className='mt-4 flex justify-evenly'>
            {categories.map((data: any, index: number) => (
                <button
                    type='button'
                    className='flex cursor-pointer flex-col items-center gap-2'
                    key={data.name}
                    onClick={() => handleSelected(index)}
                >
                    <Image
                        alt={data.alt}
                        src={data.img}
                        style={{
                            width: '90%',
                            height: 'auto',
                            padding: '1.25rem',
                            borderRadius: '10px',
                            backgroundColor: active === index ? '#272727' : '#2C2C2C',
                        }}
                    />
                    <p className='text-xs font-bold' style={{ color: active === index ? "#7D47AE" : "#FFFF" }}>{data.name}</p>
                </button>
            ))}
        </div>
    );
}
