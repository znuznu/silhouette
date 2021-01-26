import React, { useContext, useState } from 'react';

import styled, { ThemeContext } from 'styled-components';

import { IconContext } from '@react-icons/all-files';
import { CgCodeSlash } from '@react-icons/all-files/cg/CgCodeSlash';
import { CgHome } from '@react-icons/all-files/cg/CgHome';
import { CgProfile } from '@react-icons/all-files/cg/CgProfile';
import { CgWebsite } from '@react-icons/all-files/cg/CgWebsite';

import ThemeSwitcher from './common/ThemeSwitcher';

const Container = styled.div`
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    background-color: ${(props) => props.theme.global.secondary};
    justify-content: center;
`;

const Links = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: horizontal;
`;

const Element = styled.li`
    padding: 0;
    margin: auto 1rem auto 0;
`;

const Link = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.global.primary};
    font-family: 'Hind Madurai 500';
    vertical-align: middle;
    padding: 0;
    margin: 0 auto 0 auto;
`;

const Icon = styled.div`
    display: flex;
    justify-content: center;

    &:hover {
        color: ${(props) => props.hoverColor};
    }
`;

const NavVertical = () => {
    const themeContext = useContext(ThemeContext);

    // meh.
    const [sections, setSections] = useState([
        {
            anchor: '#home',
            text: 'home',
            icon: <CgHome />,
            hoverColor: themeContext.section.colors.home
        },
        {
            anchor: '#about',
            text: 'about',
            icon: <CgProfile />,
            hoverColor: themeContext.section.colors.about
        },
        {
            anchor: '#skills',
            text: 'skills',
            icon: <CgWebsite />,
            hoverColor: themeContext.section.colors.skills
        },
        {
            anchor: '#projects',
            text: 'projects',
            icon: <CgCodeSlash />,
            hoverColor: themeContext.section.colors.projects
        }
    ]);

    return (
        <Container>
            <Links>
                <IconContext.Provider
                    value={{
                        size: '2rem'
                    }}
                >
                    {sections.map((section) => (
                        <Element key={section.text}>
                            <Link href={section.anchor}>
                                <Icon hoverColor={section.hoverColor}>
                                    {section.icon}
                                </Icon>
                            </Link>
                        </Element>
                    ))}
                </IconContext.Provider>
            </Links>
            <ThemeSwitcher size={'2rem'} />
        </Container>
    );
};

export default NavVertical;
