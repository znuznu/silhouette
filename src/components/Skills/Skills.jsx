import React from 'react';

import styled from 'styled-components';

import { IconContext } from '@react-icons/all-files';
import { SiAngular } from '@react-icons/all-files/si/SiAngular';

import GoTo from 'src/components/common/GoTo/GoTo';

const Container = styled.div`
    background-color: lightgreen;
    height: 100vh;
`;

const Heading = styled.h1`
    font-family: 'Hind Madurai 500';
    font-size: 6rem;
    margin: 0;
`;

const SKILLS = {
    frontend: [
        { title: 'Angular', component: <SiAngular /> },
        { title: 'React', component: <SiAngular /> },
        { title: 'yarn', component: <SiAngular /> },
        { title: 'npm', component: <SiAngular /> },
        { title: 'Webpack', component: <SiAngular /> },
        { title: 'TypeScript', component: <SiAngular /> },
        { title: 'JavaScript', component: <SiAngular /> },
        { title: 'HTML', component: <SiAngular /> },
        { title: 'CSS/SCSS', component: <SiAngular /> }
    ],
    backend: [
        { title: 'Java' },
        { title: 'Spring Boot 2' },
        { title: 'Hibernate' },
        { title: 'PostgreSQL' },
        { title: 'Python' },
        { title: 'Node.js' }
    ],
    devops: [
        { title: 'Git' },
        { title: 'Maven' },
        { title: 'Docker' },
        { title: 'Gitlab CI/CD' },
        { title: 'Github Actions' },
        { title: 'SonarQube' }
    ]
};

const Skills = () => {
    return (
        <Container>
            <Heading>Skills</Heading>
            <ul>
                {SKILLS.frontend.map((skill) => (
                    <li key={skill.title}>{skill.title}</li>
                ))}
            </ul>
            <ul>
                {SKILLS.backend.map((skill) => (
                    <li key={skill.title}>{skill.title}</li>
                ))}
            </ul>
            <ul>
                {SKILLS.devops.map((skill) => (
                    <li key={skill.title}>{skill.title}</li>
                ))}
            </ul>
            <GoTo></GoTo>
        </Container>
    );
};

export default Skills;
