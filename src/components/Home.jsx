import React, { useContext } from 'react';
import styled, { css, keyframes, ThemeContext } from 'styled-components';
import { IconContext } from '@react-icons/all-files';
import { SiItchDotIo } from '@react-icons/all-files/si/SiItchDotIo';
import { CgArrowDownO } from '@react-icons/all-files/cg/CgArrowDownO';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';

import Header from 'src/components/Header';
import Underline from 'src/components/common/Underline';

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
    color: ${(p) => p.theme.global.primary};
    display: flex;
    justify-content: center;
    height: 5rem;
    align-items: center;
    ${(p) => p.hasScrolled && animationRotate}
    font-size: 2rem;

    @media and screen (min-width: 990px) {
        font-size: 2.5rem;
    }
`;

const ExternalIcon = styled.div`
    color: ${(p) => p.theme.global.primary};
    font-size: 2.5rem;
    display: flex;
    margin: 'auto 0 auto 0';

    @media screen and (min-width: 990px) {
        font-size: 4.5rem;
    }
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
    const { position } = useScrollPosition();

    return (
        <Container id={'home'}>
            <Header />
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
                    <Icons>
                        {EXTERNALS.map((external) => (
                            <a
                                href={external.link}
                                target="_blank"
                                title={external.title}
                                rel="noopener noreferrer"
                                key={external.link}
                            >
                                <ExternalIcon>{external.icon}</ExternalIcon>
                            </a>
                        ))}
                    </Icons>
                </NameSection>
                <ScrollIcon hasScrolled={position.y > 0}>
                    <CgArrowDownO />
                </ScrollIcon>
            </Content>
        </Container>
    );
};

export default Home;
