import { useEffect, useState } from 'react';

const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window ? window.innerWidth : Infinity,
        height: window ? window.innerHeight : Infinity
    });

    useEffect(() => {
        const handler = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        };
    }, []);

    return { size };
};

export default useWindowSize;
