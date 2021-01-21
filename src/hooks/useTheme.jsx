import { useEffect, useState } from 'react';
import { dark, light } from 'src/theme/theme';

const KEY_NAME = 'znu-silhouette-theme';

const useTheme = () => {
    const [theme, setTheme] = useState(undefined);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem(KEY_NAME);
        currentTheme ? updateTheme(currentTheme) : updateTheme('dark');
    }, []);

    const updateTheme = (theme) => {
        if (theme === 'dark') {
            localStorage.setItem(KEY_NAME, 'dark');
            setTheme(dark);
            setIsLoaded(true);
            return dark;
        } else {
            localStorage.setItem(KEY_NAME, 'light');
            setTheme(light);
            setIsLoaded(true);
            return light;
        }
    };

    const toggleTheme = () => {
        const currentTheme = localStorage.getItem(KEY_NAME);
        return currentTheme === 'dark' ? updateTheme('light') : updateTheme('dark');
    };

    return { theme, toggleTheme, isLoaded };
};

export default useTheme;
