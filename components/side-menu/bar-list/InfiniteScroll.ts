import { useDataFilterStore } from '@/store/useDataFilter';
import { useEffect, useRef } from 'react';

export const InfiniteScroll = () => {
    const target = useRef<HTMLDivElement>(null);
    const { setLimit } = useDataFilterStore();

    const handleNextPage = () => {
        setLimit(4);
    };
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                if (entries[0].isIntersecting) {
                    handleNextPage();
                }
            },
            { threshold: 1 }
        );

        if (target.current) {
            observer.observe(target.current);
        }

        return () => {
            if (target.current) {
                observer.unobserve(target.current);
            }
        };
    }, [target]);

    return { target };
};
