import React, { useState } from 'react';

import styled from 'styled-components';

import { IconContext } from '@react-icons/all-files';
import { CgCodeSlash } from '@react-icons/all-files/cg/CgCodeSlash';
import { CgHome } from '@react-icons/all-files/cg/CgHome';
import { CgProfile } from '@react-icons/all-files/cg/CgProfile';
import { CgWebsite } from '@react-icons/all-files/cg/CgWebsite';

import useWindowSize from 'src/hooks/useWindowSize';
import useScrollPosition from 'src/hooks/useScrollPosition';

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
    margin: 0;
    padding: 0;
`;

const Link = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.global.primary};
    font-family: 'Hind Madurai 500';
    vertical-align: middle;
    padding: 0;
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
                            <Link href={section.anchor}>{section.icon}</Link>
                        </Element>
                    ))}
                </IconContext.Provider>
            </Links>
        </Container>
    );
};

export default NavVertical;
