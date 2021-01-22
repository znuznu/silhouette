import React, { useContext } from 'react';
import styled from 'styled-components';
import { IconContext } from '@react-icons/all-files';
import { SiItchDotIo } from '@react-icons/all-files/si/SiItchDotIo';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';

import ThemeContext from 'src/context/ThemeContext';

const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
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
    font-size: 7rem;
    line-height: 6rem;
    color: ${(props) => props.theme.global.primary};
    margin: 0;
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

const About = () => {
    const themeContext = useContext(ThemeContext);

    /* TODO: maybe change the id of the container here */

    return (
        <Container id={'about'}>
            <Content>
                <Heading>Arthur, {<br />} full stack developer.</Heading>
                <IconContext.Provider
                    value={{
                        size: '4.5rem',
                        margin: 'auto 0 auto 0',
                        color: themeContext.selectedTheme.global.primary
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

export default About;
