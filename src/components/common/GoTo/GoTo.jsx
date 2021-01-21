import React from 'react';
import { FaRegArrowAltCircleUp } from '@react-icons/all-files/fa/FaRegArrowAltCircleUp';

import PropTypes from 'prop-types';

const GoTo = (props) => {
    const { link } = props;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <FaRegArrowAltCircleUp />
        </a>
    );
};

GoTo.propTypes = {
    link: PropTypes.string
};

export default GoTo;
