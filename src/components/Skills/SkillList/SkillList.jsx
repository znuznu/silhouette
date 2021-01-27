import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
    color: ${(props) => props.theme.global.primary};
    list-style: none;
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    justify-content: center;

    @media screen and (min-width: 990px) {
        margin: -1rem 0 0 -1rem;
        width: calc(100% + 1rem);
        justify-content: ${(props) => (props.rtl ? 'flex-end' : 'start')};
    }
`;

const Element = styled.li`
    display: flex;
    flex-direction: column;
    margin: 1rem 0 0 1rem;
    padding: 0.5rem;
    box-shadow: 2px 2px 0px 2px ${(props) => props.theme.global.primary};
    border-radius: 4px;
    ${(props) => (props.rtl ? 'margin-left: 1.5rem;' : 'margin-right: 1.5rem;')};
`;

const Type = styled.h2`
    margin-bottom: 1rem;
    font-family: 'Kanit';
    font-size: 1.8rem;
    ${(props) =>
        props.rtl
            ? `display: flex;
    justify-content: flex-end;`
            : 'auto'}

    @media screen and (min-width: 990px) {
        font-size: 3rem;
    }
`;

const Text = styled.span`
    color: ${(props) => props.theme.global.secondary};
    background-color: ${(props) => props.theme.global.primary};
    padding: 0 0.5rem;
`;

const Content = styled.div`
    margin-bottom: 3rem;
`;

const Icon = styled.span`
    font-size: 2.5rem;

    display: flex;

    @media screen and (min-width: 990px) {
        font-size: 3rem;
    }
`;

const SkillList = (props) => {
    const { skill, rtl } = props;

    return (
        <Content>
            <Type rtl={rtl}>
                <Text>{skill.title}</Text>
            </Type>
            <List rtl={rtl}>
                {skill.skills.map((skill) => (
                    <Element key={skill.title} rtl={rtl}>
                        <Icon>{skill.icon}</Icon>
                    </Element>
                ))}
            </List>
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
