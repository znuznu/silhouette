import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { IconContext } from '@react-icons/all-files';
import { SiItchDotIo } from '@react-icons/all-files/si/SiItchDotIo';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';

import Header from 'src/components/Header';
import Underline from 'src/components/common/Underline';

import useMediaQuery from 'src/hooks/useMediaQuery';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    margin: auto 0 auto 3rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const Heading = styled.h1`
    font-family: 'Kanit';
    font-size: 3rem;
    line-height: 3rem;
    color: ${(props) => props.theme.global.primary};
    margin: 0;

    @media screen and (min-width: 990px) {
        font-size: 7rem;
        line-height: 6rem;
    }
`;

const Icons = styled.div`
    width: 10rem;
    display: flex;
    justify-content: space-between;
`;

const EXTERNALS = [
    {
        link: 'https://github.com/znuznu',
        icon: <SiGithub />,
        title: 'Link to Github profile'
    },
    {
        link: 'https://znu.itch.io/',
        icon: <SiItchDotIo />,
        title: 'Link to itch.io profile'
    }
];

const Home = () => {
    const themeContext = useContext(ThemeContext);
    const [isLarge] = useMediaQuery('(min-width: 990px)');

    return (
        <Container id={'home'}>
            {isLarge && <Header />}
            <Content>
                <Heading isLarge={isLarge}>
                    Arthur, {<br />} full stack{' '}
                    <Underline
                        text={'developer'}
                        animate
                        colors={themeContext.global.developer}
                    />
                    .
                </Heading>
                <IconContext.Provider
                    value={{
                        size: isLarge ? '4.5rem' : '3rem',
                        margin: 'auto 0 auto 0',
                        color: themeContext.global.primary
                    }}
                >
                    <Icons>
                        {EXTERNALS.map((external) => (
                            <a
                                href={external.link}
                                target="_blank"
                                title={external.title}
                                rel="noopener noreferrer"
                                key={external.link}
                            >
                                {external.icon}
                            </a>
                        ))}
                    </Icons>
                </IconContext.Provider>
            </Content>
        </Container>
    );
};

export default Home;
