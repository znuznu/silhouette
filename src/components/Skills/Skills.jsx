import React from 'react';

import styled from 'styled-components';

import { SiAngular } from '@react-icons/all-files/si/SiAngular';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { SiYarn } from '@react-icons/all-files/si/SiYarn';
import { SiNpm } from '@react-icons/all-files/si/SiNpm';
import { SiWebpack } from '@react-icons/all-files/si/SiWebpack';
import { SiJavascript } from '@react-icons/all-files/si/SiJavascript';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiCss3 } from '@react-icons/all-files/si/SiCss3';
import { SiHtml5 } from '@react-icons/all-files/si/SiHtml5';

import { SiJava } from '@react-icons/all-files/si/SiJava';
import { SiSpring } from '@react-icons/all-files/si/SiSpring';
import { SiPostgresql } from '@react-icons/all-files/si/SiPostgresql';
import { SiPython } from '@react-icons/all-files/si/SiPython';
import { SiNodeDotJs } from '@react-icons/all-files/si/SiNodeDotJs';

import { SiGit } from '@react-icons/all-files/si/SiGit';
import { SiApachemaven } from '@react-icons/all-files/si/SiApachemaven';
import { SiDocker } from '@react-icons/all-files/si/SiDocker';
import { SiSonarqube } from '@react-icons/all-files/si/SiSonarqube';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { SiGitlab } from '@react-icons/all-files/si/SiGitlab';

import SkillList from 'src/components/Skills/SkillList/SkillList';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0 7rem 0 7rem;
`;

const Content = styled.div`
    padding: 0 2rem 0 2rem;
    height: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-bottom: 1.5rem;
`;

const Heading = styled.h1`
    font-family: 'Hind Madurai 500';
    font-size: 6rem;
    margin: 0;
    color: ${(props) => props.theme.global.primary};
`;

const SKILLS = {
    frontend: {
        title: 'frontend',
        skills: [
            { title: 'React', icon: <SiReact /> },
            { title: 'Angular', icon: <SiAngular /> },
            { title: 'TypeScript', icon: <SiTypescript /> },
            { title: 'JavaScript', icon: <SiJavascript /> },
            { title: 'npm', icon: <SiNpm /> },
            { title: 'yarn', icon: <SiYarn /> },
            { title: 'Webpack', icon: <SiWebpack /> },
            { title: 'HTML', icon: <SiHtml5 /> },
            { title: 'CSS/SCSS', icon: <SiCss3 /> }
        ]
    },
    backend: {
        title: 'backend',
        skills: [
            { title: 'Java', icon: <SiJava /> },
            { title: 'Spring Boot 2', icon: <SiSpring /> },
            { title: 'PostgreSQL', icon: <SiPostgresql /> },
            { title: 'Python', icon: <SiPython /> },
            { title: 'Node.js', icon: <SiNodeDotJs /> }
        ]
    },
    devops: {
        title: 'devops',
        skills: [
            { title: 'Git', icon: <SiGit /> },
            { title: 'Docker', icon: <SiDocker /> },
            { title: 'Maven', icon: <SiApachemaven /> },
            { title: 'Gitlab CI/CD', icon: <SiGitlab /> },
            { title: 'Github Actions', icon: <SiGithub /> },
            { title: 'SonarQube', icon: <SiSonarqube /> }
        ]
    }
};

const Skills = () => {
    return (
        <Container id={'skills'}>
            {/* <Heading>SKILLS</Heading> */}
            <Content>
                <SkillList skill={SKILLS.frontend} />
                <SkillList skill={SKILLS.backend} rtl={true} />
                <SkillList skill={SKILLS.devops} />
            </Content>
        </Container>
    );
};

export default Skills;
