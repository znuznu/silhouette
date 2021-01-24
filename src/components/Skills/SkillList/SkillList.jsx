import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconContext } from '@react-icons/all-files';

const List = styled.ul`
    color: ${(props) => props.theme.global.primary};
    list-style: none;
    display: inline-flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    justify-content: ${(props) => (props.rtl ? 'flex-end' : 'start')};
    margin: -1rem 0 0 -1rem;
    width: calc(100% + 1rem);
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

const Type = styled.h4`
    margin: 0;
    font-family: 'Kanit';
    font-size: 3rem;
    text-transform: capitalize;
    color: ${(props) => props.theme.global.primary};
    ${(props) =>
        props.rtl
            ? `display: flex;
    justify-content: flex-end;`
            : 'auto'}
`;

const Content = styled.div`
    margin-bottom: 3rem;
`;

const SkillList = (props) => {
    const { skill, rtl } = props;

    return (
        <Content>
            <Type rtl={rtl}>{skill.title}</Type>
            <List rtl={rtl}>
                {skill.skills.map((skill) => (
                    <Element key={skill.title} rtl={rtl}>
                        <IconContext.Provider value={{ size: '3.5rem', margin: 0 }}>
                            {skill.icon}
                        </IconContext.Provider>
                        {/* <SkillName>{skill.title}</SkillName> */}
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