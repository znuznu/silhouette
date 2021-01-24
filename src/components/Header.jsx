import React from 'react';

import styled from 'styled-components';

import ThemeSwitcher from 'src/components/common/ThemeSwitcher';
import NavHorizontal from 'src/components/NavHorizontal';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 1rem 0 0.5rem;
`;

const ContainerButtons = styled.div`
    margin: auto 0 auto 0;
`;

const Header = () => {
    return (
        <Container>
            <ContainerButtons>
                <ThemeSwitcher />
            </ContainerButtons>
            <NavHorizontal />
        </Container>
    );
};

export default Header;
