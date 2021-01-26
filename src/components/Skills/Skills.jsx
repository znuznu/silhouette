import React, { useContext } from 'react';

import styled, { ThemeContext } from 'styled-components';

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

import Underline from 'src/components/common/Underline';
import SkillList from 'src/components/Skills/SkillList/SkillList';

const Container = styled.div`
    margin: 0 1rem 0 1rem;
    display: flex;
    flex-direction: column;
    padding-top: 64px;

    @media screen and (min-width: 990px) {
        height: 100vh;
        margin: 0 8.8rem 0 8.8rem;
        padding-top: 0;
    }
`;

const Content = styled.div`
    padding: 0 1rem 0 1rem;
    height: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-bottom: 1.5rem;

    @media screen and (min-width: 990px) {
        padding: 0 2rem 0 2rem;
    }
`;

const Heading = styled.h1`
    font-family: 'Kanit';
    font-size: 2rem;
    color: ${(props) => props.theme.global.primary};
    text-transform: capitalize;

    @media screen and (min-width: 990px) {
        font-size: 3rem;
    }
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
    const themeContext = useContext(ThemeContext);

    return (
        <Container id={'skills'}>
            <Heading>
                <Underline
                    text={'skills'}
                    colors={[themeContext.section.colors.skills]}
                />
            </Heading>
            <Content>
                <SkillList skill={SKILLS.frontend} />
                <SkillList skill={SKILLS.backend} />
                <SkillList skill={SKILLS.devops} />
            </Content>
        </Container>
    );
};

export default Skills;
