import React, { useContext } from 'react';

import styled, { ThemeContext } from 'styled-components';

import ProjectCard from 'src/components/Projects/ProjectCard';
import Underline from 'src/components/common/Underline';
import { projects } from './data';

const Container = styled.div`
    margin: 0 24px 0 1rem;
    padding-top: 64px;

    @media screen and (min-width: 990px) {
        margin: 0 8.8rem 0 8.8rem;
        padding-top: 0;
    }
`;

const ProjectsContainer = styled.div`
    display: grid;
    column-gap: 2rem;
    row-gap: 1rem;

    @media screen and (min-width: 990px) {
        padding-top: 0;
        grid-template-columns: repeat(auto-fill, 352px [col-start]);
    }
`;

const Heading = styled.h1`
    font-family: 'Kanit';
    color: ${(props) => props.theme.global.primary};
    font-size: 2rem;
    text-transform: capitalize;

    @media screen and (min-width: 990px) {
        font-size: 3rem;
        margin: 32px 0 32px 0;
    }
`;

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
            <ProjectsContainer>
                {projects.map((project) => (
                    <ProjectCard project={project} key={`${project.title}`} />
                ))}
            </ProjectsContainer>
        </Container>
    );
};

export default Projects;
