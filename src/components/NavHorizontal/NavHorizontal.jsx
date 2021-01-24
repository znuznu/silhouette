import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
`;

const Links = styled.ul`
    color: yellow;
    display: flex;
    list-style: none;
`;

const Element = styled.li`
    margin-left: 1rem;
`;

const Link = styled.a`
    text-decoration: none;
    color: ${(props) => props.theme.global.primary};
    font-family: 'Hind Madurai 500';
`;

const LINKS = [
    { anchor: '#about', text: 'ABOUT' },
    { anchor: '#skills', text: 'SKILLS' },
    { anchor: '#projects', text: 'PROJECTS' }
];

const NavHorizontal = () => {
    return (
        <Container>
            <Links>
                {LINKS.map((link) => (
                    <Element key={link.text}>
                        <Link href={link.anchor}>{link.text}</Link>
                    </Element>
                ))}
            </Links>
        </Container>
    );
};

export default NavHorizontal;
