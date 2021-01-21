import { createContext } from 'react';

const ThemeContext = createContext({
    selectedTheme: undefined,
    setSelectedTheme: () => {}
});

export default ThemeContext;
