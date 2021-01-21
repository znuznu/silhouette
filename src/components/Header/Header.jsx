import React from 'react';

import ThemeSwitcher from 'src/components/common/ThemeSwitcher/ThemeSwitcher';
import Nav from 'src/components/Nav/Nav';

const Header = () => {
    return (
        <>
            <ThemeSwitcher />
            <Nav />
        </>
    );
};

export default Header;
