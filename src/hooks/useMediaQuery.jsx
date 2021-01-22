import { useEffect, useState, useLayoutEffect } from 'react';
import { isBrowser } from 'src/utils/utils';

const useSafeLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

const useMediaQuery = (query) => {
    const queries = Array.isArray(query) ? query : [query];
    const isSupported = isBrowser && 'matchMedia' in window;

    const [matches, setMatches] = useState(
        queries.map((query) => (isSupported ? !!window.matchMedia(query).matches : false))
    );

    useSafeLayoutEffect(() => {
        if (!isSupported) return undefined;

        const mediaQueryList = queries.map((query) => window.matchMedia(query));

        const listenerList = mediaQueryList.map((mediaQuery, index) => {
            const listener = () =>
                setMatches((prev) =>
                    prev.map((prevValue, idx) =>
                        index === idx ? !!mediaQuery.matches : prevValue
                    )
                );

            mediaQuery.addListener(listener);

            return listener;
        });

        return () => {
            mediaQueryList.forEach((mediaQuery, index) => {
                mediaQuery.removeListener(listenerList[index]);
            });
        };
    }, [query]);

    return matches;
};

export default useMediaQuery;
