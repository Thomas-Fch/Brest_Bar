import { useVisibleStore } from "@/store/useVisibleStore";
import Image from 'next/image';
import React from 'react';
import Pen from "../../../../public/images/Pen.svg";
import { Filter } from "../Filter";

export const FilterButton: React.FC = ({

}) => {
    const { isFilterVisible, setIsFilterVisible } = useVisibleStore();

    return (
        <div className="relative">
            <button className=' flex items-center gap-2 rounded bg-purple-500 bg-gradient-to-r from-[#C110C7] via-[#7D47AE] to-[#54CDD5] px-2 py-1 hover:brightness-110' onClick={(() => setIsFilterVisible(!isFilterVisible))}>
                <Image

                    alt="crayon"
                    src={Pen}
                    style={{
                        width: '16px',
                        height: 'auto',
                    }}
                />
                <h4 className='font-bold text-white'> Filtrer</h4 >
            </button >
            <Filter />
        </div>
    );
};