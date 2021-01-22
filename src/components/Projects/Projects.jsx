import React from 'react';

import styled from 'styled-components';

import { SiAngular } from '@react-icons/all-files/si/SiAngular';
import { SiNpm } from '@react-icons/all-files/si/SiNpm';
import { SiWebpack } from '@react-icons/all-files/si/SiWebpack';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiCss3 } from '@react-icons/all-files/si/SiCss3';
import { SiHtml5 } from '@react-icons/all-files/si/SiHtml5';

import { SiJava } from '@react-icons/all-files/si/SiJava';
import { SiSpring } from '@react-icons/all-files/si/SiSpring';

import ProjectCard from 'src/components/Projects/ProjectCard/ProjectCard';

const Container = styled.div`
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
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
        link: 'https://znuznu.github.io/daedal/',
        description: 'Maze generation algorithms written in JavaScript.'
    }
];

const Projects = () => {
    return (
        <Container id={'projects'}>
            {/* <Heading>PROJECTS</Heading> */}
            <Content>
                {PROJECTS.map((project) => (
                    <ProjectCard project={project} />
                ))}
            </Content>
        </Container>
    );
};

export default Projects;
