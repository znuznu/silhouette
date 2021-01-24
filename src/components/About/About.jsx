import React, { useContext } from 'react';
import styled from 'styled-components';
import { IconContext } from '@react-icons/all-files';
import { SiItchDotIo } from '@react-icons/all-files/si/SiItchDotIo';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';

import Header from 'src/components/Header/Header';
import ThemeContext from 'src/context/ThemeContext';

const Container = styled.div`
    height: 100vh;
    margin: 0 7rem 0 7rem;
    display: flex;
    flex-direction: column;
`;

const Content = styled.div`
    padding: 0 2rem 0 2rem;
    height: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 1.5rem;
`;

const Heading = styled.h1`
    font-family: 'Kanit';
    font-size: 3rem;
    color: ${(props) => props.theme.global.primary};
`;

const Text = styled.p`
    font-family: 'Cabin';
    color: ${(props) => props.theme.global.primary};
    font-size: 1.5rem;
    text-align: justify;
    text-justify: auto;
    max-width: 50rem;
    background-color: yellow;
`;

const About = () => {
    const themeContext = useContext(ThemeContext);

    /* TODO: maybe change the id of the container here */

    return (
        <Container id={'about'}>
            <Heading>ABOUT</Heading>
            <Content>
                <Text>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum."
                </Text>
            </Content>
        </Container>
    );
};

export default About;
