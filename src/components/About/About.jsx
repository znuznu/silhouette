import React from 'react';
import { SiItchDotIo } from '@react-icons/all-files/si/SiItchDotIo';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';

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
    return (
        <>
            <h1>znu, full stack developer.</h1>
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
        </>
    );
};

export default About;
