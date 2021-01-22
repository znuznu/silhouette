import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IconContext } from '@react-icons/all-files';
import { FaRegArrowAltCircleUp } from '@react-icons/all-files/fa/FaRegArrowAltCircleUp';

import useWindowSize from 'src/hooks/useWindowSize';
import useScrollPosition from 'src/hooks/useScrollPosition';

const Icon = styled.a`
    cursor: pointer;
    color: ${(props) => props.theme.global.primary};
    position: fixed;
    z-index: 100;
    bottom: 20px;
    right: 30px;
`;

const GoTo = (props) => {
    const { section } = props;

    const { size } = useWindowSize();
    const { position } = useScrollPosition();

    if (position.y < size.height / 1.5) return null;

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
