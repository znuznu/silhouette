import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Header from 'src/components/Header/Header';
import About from 'src/components/About/About';
import Skills from 'src/components/Skills/Skills';

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
                            <Header />
                            <About />
                            <Skills />
                        </ThemeContext.Provider>
                    </ThemeProvider>
                </main>
            )}
        </>
    );
};

export default IndexPage;
