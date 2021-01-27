import React, { useContext } from 'react';
import styled, { css, keyframes, ThemeContext } from 'styled-components';
import { IconContext } from '@react-icons/all-files';
import { SiItchDotIo } from '@react-icons/all-files/si/SiItchDotIo';
import { CgMouse } from '@react-icons/all-files/cg/CgMouse';
import { CgScrollV } from '@react-icons/all-files/cg/CgScrollV';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';

import Header from 'src/components/Header';
import Underline from 'src/components/common/Underline';

import useMediaQuery from 'src/hooks/useMediaQuery';
import useScrollPosition from 'src/hooks/useScrollPosition';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    margin: 0 3rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @media screen and (min-width: 990px) {
        justify-content: space-center;
        height: 25rem;
    }
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
    width: 6rem;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;

    @media screen and (min-width: 990px) {
        width: 10rem;
        display: flex;
        justify-content: space-between;
        margin-top: 2rem;
    }
`;

const NameSection = styled.div`
    margin: auto 0;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const animationRotate = css`
    animation: ${rotate} 1s linear;
`;

const ScrollIcon = styled.div`
    display: flex;
    justify-content: center;
    height: 5rem;
    align-items: center;
    ${(p) => p.hasScrolled && animationRotate}
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
    const { position } = useScrollPosition();

    return (
        <Container id={'home'}>
            {isLarge && <Header />}
            <Content>
                <NameSection>
                    <Heading>
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
                            size: isLarge ? '4.5rem' : '2.5rem',
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
                </NameSection>
                <ScrollIcon hasScrolled={position.y > 0}>
                    <IconContext.Provider
                        value={{
                            size: isLarge ? '2.5rem' : '2rem',
                            color: themeContext.global.primary
                        }}
                    >
                        {isLarge ? <CgMouse /> : <CgScrollV />}
                    </IconContext.Provider>
                </ScrollIcon>
            </Content>
        </Container>
    );
};

export default Home;
