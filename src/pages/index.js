import React, { useEffect, useState } from 'react';

import Home from 'src/components/Home';
import About from 'src/components/About';
import Skills from 'src/components/Skills/Skills';
import Projects from 'src/components/Projects/Projects';
import NavVertical from 'src/components/NavVertical';

import { ThemeProvider } from 'styled-components';

import ThemeContext from 'src/context/ThemeContext';
import useTheme from 'src/hooks/useTheme';

import GlobalStyle from 'src/theme/GlobalStyle';

const IndexPage = () => {
    const { theme, isLoaded } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [isLoaded, theme]);

    return (
        <>
            {selectedTheme && (
                <main>
                    {/* No way to update the theme natively... */}
                    <ThemeProvider theme={selectedTheme}>
                        <ThemeContext.Provider
                            value={{ selectedTheme, setSelectedTheme }}
                        >
                            <GlobalStyle />
                            <Home />
                            <About />
                            <Skills />
                            <Projects />
                            <NavVertical />
                        </ThemeContext.Provider>
                    </ThemeProvider>
                </main>
            )}
        </>
    );
};

export default IndexPage;
