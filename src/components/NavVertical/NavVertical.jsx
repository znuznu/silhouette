import React, { useState } from 'react';

import styled from 'styled-components';

import { IconContext } from '@react-icons/all-files';
import { CgCodeSlash } from '@react-icons/all-files/cg/CgCodeSlash';
import { CgHome } from '@react-icons/all-files/cg/CgHome';
import { CgProfile } from '@react-icons/all-files/cg/CgProfile';
import { CgWebsite } from '@react-icons/all-files/cg/CgWebsite';

import useWindowSize from 'src/hooks/useWindowSize';
import useScrollPosition from 'src/hooks/useScrollPosition';
import ThemeSwitcher from '../common/ThemeSwitcher/ThemeSwitcher';

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
`;

const Line = styled.hr`
    color: ${(props) => props.theme.global.primary};
    background-color: ${(props) => props.theme.global.primary};
    border: 1px solid ${(props) => props.theme.global.primary};
    height: 1px;
`;

const SECTIONS = [
    { anchor: '#home', text: 'HOME', icon: <CgHome /> },
    { anchor: '#about', text: 'ABOUT', icon: <CgProfile /> },
    { anchor: '#skills', text: 'SKILLS', icon: <CgWebsite /> },
    { anchor: '#projects', text: 'PROJECTS', icon: <CgCodeSlash /> }
];

const NavVertical = () => {
    const { size } = useWindowSize();
    const { position } = useScrollPosition();

    if (position.y < size.height) return null;

    return (
        <Container>
            <Links>
                <IconContext.Provider
                    value={{
                        size: '2rem'
                    }}
                >
                    {SECTIONS.map((section) => (
                        <Element key={section.text}>
                            <Link href={section.anchor}>
                                <Icon>{section.icon}</Icon>
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
