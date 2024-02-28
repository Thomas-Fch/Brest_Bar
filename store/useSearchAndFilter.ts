
import { useState } from "react";
import { useDataFilterStore } from "./useDataFilter";
import { useMapZoomStore } from './useMapZoom';


const useSearchAndFilter = () => {

  const [active, setActive] = useState<string | null>();
  const { search, setSearch } = useDataFilterStore();
  const { setZoom } = useMapZoomStore();


  const handleSelected = (query: string, ) => {
    setActive((prevIndex) => {
      const newIndex = prevIndex === query ? null : query;
      return newIndex;
    });
  };

  const handleSort = (query: string) => {
    setSearch(search === query ? "" : query);
  };
  const handleCardClick = (query: string, ) => {
    handleSelected(query);
    handleSort(query);
    setZoom([0, 0]);
  };
  return {
    active,
    handleSelected,
    handleSort,
    handleCardClick,
  }
};

export default useSearchAndFilter;
