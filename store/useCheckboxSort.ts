import React from 'react';
import { useDataFilterStore } from './useDataFilter';

const useCheckboxSort = () => {
  const [ isChecked, setIsChecked] = React.useState<boolean>(false);
  const [checkedBox, setCheckedBox] = React.useState<string | null>(null);
  const { sort, setSort } = useDataFilterStore();

  const handleClick = (term: string) => {
    if (checkedBox !== term) {
        setCheckedBox(term);
        setSort(term);
      } else {
        setCheckedBox(null);
        setSort('');
      }
  };

  const handleSort = (term: string) => {
    setSort(sort === term ? '' : term);
  };

  const handleOptionClick = (term: string) => {
    handleClick(term);
    handleSort(term);
  };

  return {
    isChecked,
    checkedBox,
    sort,
    handleClick,
    handleSort,
    handleOptionClick,
  };
};

export default useCheckboxSort;