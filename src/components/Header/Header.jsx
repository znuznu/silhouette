import React, { useEffect } from 'react';

import styled from 'styled-components';

import ThemeSwitcher from 'src/components/common/ThemeSwitcher/ThemeSwitcher';
import NavHorizontal from 'src/components/NavHorizontal/NavHorizontal';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 1rem;
`;

const ContainerButtons = styled.div`
    margin: auto 0 auto 0;
`;

const Header = () => {
    return (
        <Container>
            <ContainerButtons>
                <ThemeSwitcher />
                {/* TODO: replace this one with i18n */}
                <ThemeSwitcher />
            </ContainerButtons>
            <NavHorizontal />
        </Container>
    );
};

export default Header;
