import React, { useContext } from 'react';

import styled, { ThemeContext } from 'styled-components';

import Underline from 'src/components/common/Underline';
import SkillList from 'src/components/Skills/SkillList';

import skills from './data';

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

const Text = styled.p`
    font-family: 'Cabin';
    color: ${(props) => props.theme.global.primary};
    font-size: 1.2rem;
    text-align: justify;
    text-justify: auto;
    max-width: 50rem;
    margin: 0;

    @media screen and (min-width: 990px) {
        font-size: 1.5rem;
    }
`;

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
            <Text>All of the following are technologies I'm familiar with.</Text>
            <Content>
                <SkillList skill={skills.frontend} />
                <SkillList skill={skills.backend} />
                <SkillList skill={skills.devops} />
            </Content>
        </Container>
    );
};

export default Skills;
