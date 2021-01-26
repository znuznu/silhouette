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
    width: 7.5rem;
`;

const Links = styled.ul`
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin-bottom: 0;
`;

const Element = styled.li`
    width: 100%;
    display: flex;
`;

const Link = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.global.primary};
    vertical-align: middle;
    padding: 0 0.3rem 0.8rem;
    margin-left: auto;
    text-transform: uppercase;
    align-items: center;
    display: flex;
    transition: max-width 1s;
    max-width: 3rem;

    &:hover {
        max-width: 10rem;
    }
`;

const Text = styled.span`
    font-family: 'Hind Madurai 500';
    margin-left: 0.5rem;
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
    margin-top: 0;
`;

const Outside = styled.div`
    display: inline-block;
    float: right;
`;

const NavVertical = () => {
    const { size } = useWindowSize();
    const { position } = useScrollPosition();
    const [hoveredIndex, setHoveredIndex] = useState(-1);

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

    if (position.y < size.height) return null;

    const updateIndex = (index) => {
        setHoveredIndex(index);
    };

    const resetIndex = () => {
        setHoveredIndex(-1);
    };

    return (
        <Container>
            <Links>
                <IconContext.Provider
                    value={{
                        size: '2rem'
                    }}
                >
                    {sections.map((section, index) => (
                        <Element key={section.text}>
                            <Link
                                href={section.anchor}
                                onMouseEnter={() => updateIndex(index)}
                                onMouseLeave={() => resetIndex()}
                                hasOneLinkHovered={hoveredIndex !== -1}
                            >
                                <Icon>{section.icon}</Icon>
                                {index === hoveredIndex && <Text>{section.text}</Text>}
                                {/* <Text>{section.text}</Text> */}
                            </Link>
                        </Element>
                    ))}
                </IconContext.Provider>
            </Links>
            <Outside>
                <Line />
                <ThemeSwitcher size={'2rem'} />
            </Outside>
        </Container>
    );
};

export default NavVertical;
