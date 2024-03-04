'use client';

import { Loader } from '@/components/Loader/Index';
import { BarApiData } from '@/lib/GetBarsApiData';
import { haversine } from '@/lib/haversine';
import { useFetch } from '@/store/useFetch';
import { useUserLocation } from '@/store/useUserLocation';
import React from 'react';
import { BarsCard } from './Card';
import { InfiniteScroll } from './InfiniteScroll';
import { FilterButton } from './buttons/ButtonFilter';

export const BarList: React.FC = () => {
    const { userLocation } = useUserLocation();
    const establishments = useFetch();
    const { apiData } = establishments;
    const { isLoading } = establishments;
    const { target } = InfiniteScroll();
    return isLoading ? (
        <Loader />
    ) : (
        <section className=' overflow-y-scroll px-7 py-4 scrollbar-thin scrollbar-track-[#2C2C2C] scrollbar-thumb-[#9747FF]'
            style={{ maxHeight: "calc(100vh - 350px)" }} >
            <div className='flex items-center justify-between'>

                <h4 className='font-bold text-white'>Explorer</h4>
                <FilterButton />
            </div>
            {apiData?.map((item: BarApiData) => {
                const { location } = item;
                const { coordinates } = location;
                let distance: number | null = null;

                if (userLocation) {
                    distance = haversine(
                        userLocation[0],
                        userLocation[1],
                        coordinates[1],
                        coordinates[0]
                    );
                }

                return (
                    <BarsCard item={item} key={item.id} distance={distance} />
                );
            })}
            <div ref={target}></div>
        </section>
    );
};