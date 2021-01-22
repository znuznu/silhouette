import React, { useState } from 'react';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;

    ul {
        color: yellow;
        display: flex;
        list-style: none;

        li {
            margin-left: 1rem;

            a {
                text-decoration: none;
                color: ${(props) => props.theme.global.primary};
                font-family: 'Hind Madurai 500';
            }
        }
    }
`;

const Nav = () => {
    const [links, setLinks] = useState([
        { anchor: '#about', text: 'ABOUT' },
        { anchor: '#skills', text: 'SKILLS' },
        { anchor: '#projects', text: 'PROJECTS' }
    ]);

    return (
        <Container>
            <ul>
                {links &&
                    links.map((link) => (
                        <li key={link.text}>
                            <a href={link.anchor}>{link.text}</a>
                        </li>
                    ))}
            </ul>
        </Container>
    );
};

export default Nav;
