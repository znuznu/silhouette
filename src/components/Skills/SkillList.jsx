import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import iconsMapper from 'src/utils/IconsMapper';

const SkillsGrid = styled.div`
    display: grid;
    row-gap: 1rem;
    column-gap: 1rem;
    grid-template-columns: repeat(auto-fill, 64px [col-start]);

    @media screen and (min-width: 990px) {
        row-gap: 1rem;
        column-gap: 2rem;
    }
`;

const SkillCard = styled.div`
    width: 36px;
    height: 36px;
    padding: 0.5rem;
    box-shadow: 2px 2px 0px 2px ${(props) => props.theme.global.primary};
    border-radius: 4px;

    @media screen and (min-width: 990px) {
        width: 48px;
        height: 48px;
    }
`;

const Type = styled.h2`
    display: inline-flex;
    padding: 0 0.5rem;
    margin-bottom: 1rem;
    font-family: 'Kanit';
    font-size: 1.6rem;
    ${(props) =>
        props.rtl
            ? `display: flex;
    justify-content: flex-end;`
            : 'auto'};
    color: ${(props) => props.theme.global.secondary};
    background-color: ${(props) => props.theme.global.primary};

    @media screen and (min-width: 990px) {
        font-size: 2rem;
    }
`;

const Content = styled.div`
    margin-bottom: 3rem;
`;

const Icon = styled.span`
    font-size: 2.5rem;

    color: ${(props) => props.theme.global.primary};
    display: flex;

    @media screen and (min-width: 990px) {
        font-size: 3rem;
    }
`;

const SkillList = (props) => {
    const { skill, rtl } = props;

    return (
        <Content>
            <Type rtl={rtl}>{skill.title}</Type>
            <SkillsGrid>
                {skill.skills.map((skill) => (
                    <SkillCard key={skill.title} rtl={rtl}>
                        <Icon>{iconsMapper[skill.icon]}</Icon>
                    </SkillCard>
                ))}
            </SkillsGrid>
        </Content>
    );
};

SkillList.propTypes = {
    skill: PropTypes.shape({
        title: PropTypes.string,
        skills: PropTypes.array
    }).isRequired,
    rtl: PropTypes.bool
};

SkillList.defaultProps = {
    rlt: false
};

export default SkillList;
