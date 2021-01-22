import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconContext } from '@react-icons/all-files';

const List = styled.ul`
    color: ${(props) => props.theme.global.primary};
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    justify-content: ${(props) => (props.rtl ? 'flex-end' : 'start')};
`;

const Element = styled.li`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    box-shadow: 2px 2px 0px 2px ${(props) => props.theme.global.primary};
    border-radius: 4px;
    ${(props) => (props.rtl ? 'margin-left: 1.5rem;' : 'margin-right: 1.5rem;')};
`;

const SkillType = styled.h4`
    margin: 0.5rem auto 0 auto;
    font-family: 'Hind Madurai 500';
    font-size: 4rem;
    text-transform: uppercase;
    color: ${(props) => props.theme.global.primary};
    ${(props) =>
        props.rtl
            ? `display: flex;
    justify-content: flex-end;`
            : 'auto'}
`;

const SkillList = (props) => {
    const { skill, rtl } = props;

    return (
        <div>
            <SkillType rtl={rtl}>{skill.title}</SkillType>
            <List rtl={rtl}>
                {skill.skills.map((skill) => (
                    <Element key={skill.title} rtl={rtl}>
                        <IconContext.Provider value={{ size: '5rem' }}>
                            {skill.icon}
                        </IconContext.Provider>
                        {/* <SkillName>{skill.title}</SkillName> */}
                    </Element>
                ))}
            </List>
        </div>
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
