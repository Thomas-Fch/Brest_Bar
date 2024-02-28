import { useDataFilterStore } from '@/store/useDataFilter';
import { useDebounce } from '@uidotdev/usehooks';
import React from 'react';

export const SearchBar: React.FC = () => {
    const { search, setSearch } = useDataFilterStore();

    const debouncedSetSearch = useDebounce(search, 300);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        setSearch(inputValue);
    };

    return (
        <div className='w-80'>
            <label htmlFor='search'></label>
            <input
                placeholder='Un nom en tête ?'
                name='search'
                onChange={handleSearchChange}
                type='text'
                className='w-[100%] rounded-sm bg-[#2C2C2C] p-2 text-sm text-white outline-none placeholder:text-neutral-500 focus:bg-[#272727]'
            />
        </div>
    );
};
