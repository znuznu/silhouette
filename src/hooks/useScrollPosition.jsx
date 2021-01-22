import { useEffect, useState } from 'react';

const useScrollPosition = () => {
    const [position, setPosition] = useState({
        x: window ? window.pageXOffset : 0,
        y: window ? window.pageYOffset : 0
    });

    useEffect(() => {
        const handler = () => {
            setPosition({
                x: window.pageXOffset,
                y: window.pageYOffset
            });
        };

        window.addEventListener('scroll', handler, {
            capture: false,
            passive: true
        });

        return () => {
            window.removeEventListener('scroll', handler);
        };
    }, []);

    return { position };
};

export default useScrollPosition;
