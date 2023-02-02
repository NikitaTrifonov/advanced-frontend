import { MutableRefObject, useCallback, useRef } from 'react';

export function useDebounce(callback: (...args: any[]) => void, delay: number) {
    const timeoutRef = useRef() as MutableRefObject<any>;

    return useCallback((...args: any[]) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout((...args) => {
            callback(...args);
        }, delay);
    }, [callback, delay]);
}
