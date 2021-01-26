import React, { useContext } from 'react';

import styled, { ThemeContext } from 'styled-components';

import { SiAngular } from '@react-icons/all-files/si/SiAngular';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { SiGatsby } from '@react-icons/all-files/si/SiGatsby';
import { SiNpm } from '@react-icons/all-files/si/SiNpm';
import { SiWebpack } from '@react-icons/all-files/si/SiWebpack';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiCss3 } from '@react-icons/all-files/si/SiCss3';
import { SiHtml5 } from '@react-icons/all-files/si/SiHtml5';

import { SiJava } from '@react-icons/all-files/si/SiJava';
import { SiSpring } from '@react-icons/all-files/si/SiSpring';

import { SiGithub } from '@react-icons/all-files/si/SiGithub';

import ProjectCard from 'src/components/Projects/ProjectCard/ProjectCard';
import Underline from 'src/components/common/Underline';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 24px 30rem 1rem;
    padding-top: 64px;

    @media screen and (min-width: 990px) {
        height: 100vh;
        margin: 0 7rem 0 7rem;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: 990px) {
        margin: -2rem 0 0 -2rem;
        width: calc(100% + 2rem);
    }
`;

const Heading = styled.h1`
    font-family: 'Kanit';
    color: ${(props) => props.theme.global.primary};
    font-size: 2rem;
    text-transform: capitalize;
    margin: 0;

    @media screen and (min-width: 990px) {
        font-size: 3rem;
        margin: 32px 0 32px 0;
    }
`;

const PROJECTS = [
    {
        title: 'Groolkit',
        skills: [
            { title: 'TypeScript', icon: <SiTypescript /> },
            { title: 'npm', icon: <SiNpm /> },
            { title: 'Webpack', icon: <SiWebpack /> }
        ],
        source: 'https://github.com/znuznu/groolkit',
        sourceIcon: <SiGithub />,
        link: 'https://www.npmjs.com/package/@znuznu/groolkit',
        description: 'A JavaScript library with a bunch of algorithms related to grids.'
    },
    {
        title: 'Little Knight',
        skills: [
            { title: 'JavaScript', icon: <SiJavascript /> },
            { title: 'npm', icon: <SiNpm /> },
            { title: 'Webpack', icon: <SiWebpack /> }
        ],
        source: 'https://github.com/znuznu/little-knight',
        sourceIcon: <SiGithub />,
        link: 'https://znu.itch.io/little-knight',
        description:
            'A fast paced "dungeon crawler" written in JavaScript and based on Phaser 3.'
    },
    {
        title: 'Visum',
        skills: [
            { title: 'Angular', icon: <SiAngular /> },
            { title: 'Spring', icon: <SiSpring /> },
            { title: 'Java', icon: <SiJava /> },
            { title: 'TypeScript', icon: <SiTypescript /> },
            { title: 'HTML5', icon: <SiHtml5 /> },
            { title: 'CSS3', icon: <SiCss3 /> }
        ],
        description: 'Manage personal movie reviews.'
    },
    {
        title: 'Daedal',
        skills: [
            { title: 'JavaScript', icon: <SiJavascript /> },
            { title: 'npm', icon: <SiNpm /> },
            { title: 'Webpack', icon: <SiWebpack /> },
            { title: 'HTML5', icon: <SiHtml5 /> },
            { title: 'CSS3', icon: <SiCss3 /> }
        ],
        source: 'https://github.com/znuznu/daedal',
        sourceIcon: <SiGithub />,
        link: 'https://znuznu.github.io/daedal/',
        description: 'Maze generation algorithms written in JavaScript.'
    },
    {
        title: 'Silhouette',
        skills: [
            { title: 'Gatsby', icon: <SiGatsby /> },
            { title: 'React', icon: <SiReact /> },
            { title: 'JavaScript', icon: <SiJavascript /> },
            { title: 'npm', icon: <SiNpm /> },
            { title: 'HTML5', icon: <SiHtml5 /> },
            { title: 'CSS3', icon: <SiCss3 /> }
        ],
        source: 'https://github.com/znuznu/silhouette',
        sourceIcon: <SiGithub />,
        description: "Portfolio, you're on it."
    }
];

const Projects = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <Container id={'projects'}>
            <Heading>
                <Underline
                    text={'projects'}
                    colors={[themeContext.section.colors.projects]}
                />
            </Heading>
            <Wrapper>
                {PROJECTS.map((project) => (
                    <ProjectCard project={project} key={`${project.title}`} />
                ))}
            </Wrapper>
        </Container>
    );
};

export default Projects;
