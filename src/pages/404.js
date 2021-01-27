import * as React from 'react';
import { Link } from 'gatsby';

import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from 'src/theme/GlobalStyle';
import useTheme from 'src/hooks/useTheme';

const Heading = styled.h1`
    font-family: 'Kanit';
    font-size: 6rem;
    color: ${(p) => p.theme.global.primary};
    display: flex;
    justify-content: center;
    padding: 0 1rem;

    @media screen and (min-width: 990px) {
        font-size: 10rem;
        padding: 0 2rem;
    }
`;

const Text = styled.p`
    font-family: 'Kanit';
    font-size: 2rem;
    color: ${(p) => p.theme.global.primary};
    text-decoration: none;
    text-align: center;

    @media screen and (min-width: 990px) {
        font-size: 4rem;
        padding: 0 2rem;
    }
`;

const NotFoundPage = () => {
    const { theme, isLoaded } = useTheme();

    return (
        <main>
            {isLoaded && (
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Heading>404</Heading>
                    <Text>
                        <Link to="/">Go home</Link>
                    </Text>
                </ThemeProvider>
            )}
        </main>
    );
};

export default NotFoundPage;
