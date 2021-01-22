import React from 'react';
import styled from 'styled-components';
import { IconContext } from '@react-icons/all-files';
import { FaRegArrowAltCircleUp } from '@react-icons/all-files/fa/FaRegArrowAltCircleUp';

import PropTypes from 'prop-types';

const Icon = styled.a`
    margin: 1rem;
    cursor: pointer;
    color: ${(props) => props.theme.global.primary};
`;

const GoTo = (props) => {
    const { section } = props;

    return (
        <Icon href={section} rel="noopener noreferrer">
            <IconContext.Provider value={{ size: '2rem', margin: 'auto 0 auto 0' }}>
                <FaRegArrowAltCircleUp />
            </IconContext.Provider>
        </Icon>
    );
};

GoTo.propTypes = {
    section: PropTypes.string
};

export default GoTo;
