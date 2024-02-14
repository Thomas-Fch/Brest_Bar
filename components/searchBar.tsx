import { useDataFilterStore } from '@/store/useDataFilter';
import { useDebounce } from '@uidotdev/usehooks';
import React from 'react';

export const SearchBar: React.FC = () => {
    const { setSearch } = useDataFilterStore();
    const debouncedSearchTerm = useDebounce(setSearch, 300);

    const handleSearch =
        (e: React.ChangeEvent<HTMLInputElement>) => {
            debouncedSearchTerm
            setSearch(e.target.value);
        }


    return (
        <div className='w-80'>
            <label
                htmlFor='search'
            >
            </label>
            <input
                placeholder='Un nom en tête ?'
                name='search'
                onChange={handleSearch}
                type='text'
                className=' w-[100%] rounded-sm bg-[#2C2C2C] p-2 text-sm text-white outline-none focus:bg-[#272727] '
            />
        </div>
    );
};