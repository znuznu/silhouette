import React from 'react';

import styled from 'styled-components';

import { SiGatsby } from '@react-icons/all-files/si/SiGatsby';

const Container = styled.div`
    padding: 3rem 1rem 1rem;
`;

const Text = styled.p`
    font-family: 'Cabin';
    color: ${(props) => props.theme.global.primary};
    font-size: 1rem;
    margin: 0;
    text-align: center;

    @media screen and (min-width: 990px) {
        padding: 0 2rem 0 2rem;
        font-size: 1.2rem;
    }
`;

const Footer = () => {
    return (
        <Container>
            <Text>
                Made with <SiGatsby /> by me
            </Text>
            <Text>Copyright (c) - Arthur Fröhlich under MIT license</Text>
        </Container>
    );
};

export default Footer;
