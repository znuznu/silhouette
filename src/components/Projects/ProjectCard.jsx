import React from 'react';

import styled from 'styled-components';

import PropTypes from 'prop-types';

import { VscTools } from '@react-icons/all-files/vsc/VscTools';
import { IoOpenOutline } from '@react-icons/all-files/io5/IoOpenOutline';
import iconsMapper from 'src/utils/IconsMapper';

const Card = styled.div`
    padding: 1rem;
    box-shadow: 4px 4px 0px 4px ${(props) => props.theme.global.primary};
    border-radius: 2px;
    color: ${(props) => props.theme.global.primary};
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 990px) {
        width: 20rem;
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
    font-size: 1.5rem;
    display: flex;

    @media screen and (min-width: 990px) {
        font-size: 2rem;
    }
`;

const Icon = styled.div`
    color: ${(p) => p.theme.global.primary};
    font-size: 1.5rem;
    display: flex;

    @media screen and (min-width: 990px) {
        font-size: 1.8rem;
    }
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProjectCard = (props) => {
    const { project } = props;

    return (
        <Card>
            <Header>
                <Title>{project.title}</Title>
                <Links>
                    {project.source ? (
                        <Link
                            href={project.source}
                            target="_blank"
                            title={'Link to the source code'}
                            rel="noopener noreferrer"
                        >
                            <Icon>{iconsMapper[project.sourceIcon]}</Icon>
                        </Link>
                    ) : (
                        <Icon>
                            <VscTools />
                        </Icon>
                    )}

                    {project.link && (
                        <Link
                            href={project.link}
                            target="_blank"
                            title={'Link to the project website'}
                            rel="noopener noreferrer"
                        >
                            <Icon>
                                <IoOpenOutline />
                            </Icon>
                        </Link>
                    )}
                </Links>
            </Header>

            <Description>{project.description}</Description>

            <Skills>
                {project.skills.map((skill) => (
                    <SkillIcon key={skill.title}>{iconsMapper[skill.icon]}</SkillIcon>
                ))}
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
