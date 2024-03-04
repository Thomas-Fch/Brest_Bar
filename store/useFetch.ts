import {
  AllBarsApiData,
  BarApiData,
  getBarsApiData,
} from '@/lib/GetBarsApiData';
import React from 'react';
import { useDataFilterStore } from '../store/useDataFilter';
  
  export const useFetch = (allData?: boolean) => {
    const { limit, search, sort } = useDataFilterStore();
    const [apiData, setApiData] = React.useState<BarApiData[] | null>(null);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const sortResultByRating = sort === 'rating';
    const sortResultByNameAZ = sort === 'nameAZ';
    const sortResultByNameZA = sort === 'nameZA';
  
    React.useEffect(() => {
      setIsLoading(true);
      try {
        const fetchBarsApi = async () => {
          const establishments: AllBarsApiData | undefined =
            await getBarsApiData(limit, search, allData);
  
          if (establishments) {
            let filteredEstablishments = establishments.data;
            if (sortResultByRating) {
              filteredEstablishments = filteredEstablishments.sort(
                (a, b) => Number(b.rating) - Number(a.rating)
              );
            }
           else if (sortResultByNameAZ) {
              filteredEstablishments = filteredEstablishments.sort(
                (a, b) => a.name.localeCompare(b.name)
              );
            }
           else if (sortResultByNameZA) {
              filteredEstablishments = filteredEstablishments.sort(
                (a, b) => b.name.localeCompare(a.name)
              );
            }
            setApiData(filteredEstablishments);
            setIsLoading(false);
          } else throw new Error();
        };
  
        fetchBarsApi();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }, [limit, search, sort]);
    return { apiData, isLoading };
  };