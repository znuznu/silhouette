import React, { useEffect } from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { IconContext } from '@react-icons/all-files';
import { SiGithub } from '@react-icons/all-files/si/SiGithub';
import { IoOpenOutline } from '@react-icons/all-files/io5/IoOpenOutline';

const IconsColor = {
    TypeScript: '#2F74C0',
    JavaScript: '#EFD81D',
    npm: '#CC3534',
    Webpack: '#8ED6FB',
    Java: '#5283A2',
    Angular: '#DD0031',
    Spring: '#6CB33E',
    HTML5: '#F16529',
    CSS3: '#1A82BB'
};

const Container = styled.div`
    padding: 1rem;
    box-shadow: 4px 4px 0px 4px ${(props) => props.theme.global.primary};
    border-radius: 2px;
    color: ${(props) => props.theme.global.primary};
    max-width: 20rem;
    display: flex;
    flex-direction: column;
`;

const Title = styled.div`
    font-family: 'Kanit';
    font-size: 2.5rem;
    font-weight: 800;
`;

const Link = styled.a`
    color: ${(props) => props.theme.global.primary};
    margin-left: 0.5rem;
`;

const Links = styled.div`
    margin: auto 0 auto 0;
    display: flex;
`;

const Description = styled.div`
    padding-right: 1rem;
    font-family: 'Cabin';
    font-size: 1.2rem;
    margin-bottom: 1rem;
    flex-grow: 1;
`;

const Skills = styled.div`
    display: flex;
`;

const SkillIcon = styled.div`
    margin-right: 0.5rem;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProjectCard = (props) => {
    const { project } = props;

    return (
        <Container>
            <Header>
                <Title>{project.title}</Title>
                <Links>
                    <IconContext.Provider
                        value={{
                            size: '1.8rem'
                        }}
                    >
                        {project.source && (
                            <Link
                                href={project.source}
                                target="_blank"
                                title={'Link to the source code.'}
                                rel="noopener noreferrer"
                            >
                                <SiGithub />
                            </Link>
                        )}

                        {project.link && (
                            <Link
                                href={project.link}
                                target="_blank"
                                title={'Link to the project website.'}
                                rel="noopener noreferrer"
                            >
                                <IoOpenOutline />
                            </Link>
                        )}
                    </IconContext.Provider>
                </Links>
            </Header>

            <Description>{project.description}</Description>

            <Skills>
                {project.skills.map((skill) => (
                    <IconContext.Provider
                        value={{
                            size: '2rem'
                        }}
                    >
                        <SkillIcon> {skill.icon}</SkillIcon>
                    </IconContext.Provider>
                ))}
            </Skills>
        </Container>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string,
        skills: PropTypes.array,
        source: PropTypes.string,
        link: PropTypes.string,
        description: PropTypes.string
    }).isRequired
};

ProjectCard.defaultProps = {
    skill: {
        title: '',
        skills: [],
        source: 'No source yet.',
        link: 'No link yet.',
        description: ''
    }
};

export default ProjectCard;
