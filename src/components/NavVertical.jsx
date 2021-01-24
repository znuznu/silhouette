import React, { useContext, useState } from 'react';

import styled, { ThemeContext } from 'styled-components';

import { IconContext } from '@react-icons/all-files';
import { CgCodeSlash } from '@react-icons/all-files/cg/CgCodeSlash';
import { CgHome } from '@react-icons/all-files/cg/CgHome';
import { CgProfile } from '@react-icons/all-files/cg/CgProfile';
import { CgWebsite } from '@react-icons/all-files/cg/CgWebsite';

import useWindowSize from 'src/hooks/useWindowSize';
import useScrollPosition from 'src/hooks/useScrollPosition';
import ThemeSwitcher from './common/ThemeSwitcher';

const Container = styled.div`
    z-index: 100;
    position: fixed;
    top: 50%;
    right: 1rem;
    transform: translate(0%, -50%);
`;

const Links = styled.ul`
    list-style: none;
    padding: 0;
`;

const Element = styled.li`
    padding: 0;
    margin: 0 auto 1rem auto;
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

const Line = styled.hr`
    color: ${(props) => props.theme.global.primary};
    background-color: ${(props) => props.theme.global.primary};
    border: 1px solid ${(props) => props.theme.global.primary};
    height: 1px;
`;

const NavVertical = () => {
    const { size } = useWindowSize();
    const { position } = useScrollPosition();

    const themeContext = useContext(ThemeContext);

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

    if (position.y < size.height) return null;

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
                <Line />
            </Links>
            <ThemeSwitcher size={'2rem'} />
        </Container>
    );
};

export default NavVertical;
