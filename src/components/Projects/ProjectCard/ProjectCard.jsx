import React, { useContext } from 'react';

import styled, { ThemeContext } from 'styled-components';

import PropTypes from 'prop-types';

import { IconContext } from '@react-icons/all-files';
import { GrTools } from '@react-icons/all-files/gr/GrTools';
import { IoOpenOutline } from '@react-icons/all-files/io5/IoOpenOutline';

import useMediaQuery from 'src/hooks/useMediaQuery';

const Card = styled.div`
    padding: 1rem;
    box-shadow: 4px 4px 0px 4px ${(props) => props.theme.global.primary};
    border-radius: 2px;
    color: ${(props) => props.theme.global.primary};
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0.5rem 0 1rem 0;

    @media screen and (min-width: 990px) {
        margin: 2rem 0 0 2rem;
        max-width: 20rem;
        min-width: 20rem;
    }
`;

const Title = styled.div`
    font-family: 'Kanit';
    font-size: 1.5rem;
    font-weight: 800;

    @media screen and (min-width: 990px) {
        font-size: 2.5rem;
    }
`;

const Link = styled.a`
    margin-left: 0.5rem;
`;

const Links = styled.div`
    margin: auto 0 auto 0;
    display: flex;
`;

const Description = styled.p`
    padding-right: 1rem;
    font-family: 'Cabin';
    font-size: 1.1rem;
    margin: 0 0 1rem 0;
    flex-grow: 1;

    @media screen and (min-width: 990px) {
        font-size: 1.2rem;
    }
`;

const Skills = styled.div`
    display: flex;
    flex-wrap: wrap;
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

    const themeContext = useContext(ThemeContext);
    const [isLarge] = useMediaQuery('(min-width: 990px)');

    return (
        <Card>
            <Header>
                <Title>{project.title}</Title>
                <Links>
                    <IconContext.Provider
                        value={{
                            size: isLarge ? '1.8rem' : '1.5rem',
                            color: themeContext.global.primary
                        }}
                    >
                        {project.source ? (
                            <Link
                                href={project.source}
                                target="_blank"
                                title={'Link to the source code.'}
                                rel="noopener noreferrer"
                            >
                                {project.sourceIcon}
                            </Link>
                        ) : (
                            <GrTools />
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
                <IconContext.Provider
                    value={{
                        size: isLarge ? '2rem' : '1.5rem'
                    }}
                >
                    {project.skills.map((skill) => (
                        <SkillIcon key={skill.title}> {skill.icon}</SkillIcon>
                    ))}
                </IconContext.Provider>
            </Skills>
        </Card>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        title: PropTypes.string,
        skills: PropTypes.array,
        source: PropTypes.string,
        sourceIcon: PropTypes.object,
        link: PropTypes.string,
        description: PropTypes.string
    }).isRequired
};

ProjectCard.defaultProps = {
    skill: {
        title: '',
        skills: [],
        source: 'No source yet.',
        sourceIcon: '',
        link: 'No link yet.',
        description: ''
    }
};

export default ProjectCard;
