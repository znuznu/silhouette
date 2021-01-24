import React from 'react';

import PropTypes from 'prop-types';

import styled from 'styled-components';

// Awful, should probably refactor this component but I only need 2 colors so it's okay
const Span = styled.span`
    background-image: ${(props) =>
        `linear-gradient(90deg, ${props.startColor} 0%, ${
            props.endColor ? props.endColor : props.startColor
        } 100%)`};
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: right 0 top 78%;
    transition: background-size 0.25s ease-in;

    ${(props) =>
        props.animate &&
        `&:hover {
            background-size: 100% 82%;
        }`}
`;

const Underline = (props) => {
    const { text, animate, colors } = props;

    return (
        <Span animate={animate} startColor={colors[0]} endColor={colors[1]}>
            {text}
        </Span>
    );
};

Underline.propTypes = {
    text: PropTypes.string.isRequired,
    animate: PropTypes.bool,
    colors: PropTypes.array.isRequired
};

Underline.defaultProps = {
    animate: false
};

export default Underline;
