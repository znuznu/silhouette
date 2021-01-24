import React, { useContext } from 'react';
import styled from 'styled-components';

import { IconContext } from '@react-icons/all-files';
import { CgSun } from '@react-icons/all-files/cg/CgSun';
import { CgMoon } from '@react-icons/all-files/cg/CgMoon';

import ThemeContext from 'src/context/ThemeContext';
import useTheme from 'src/hooks/useTheme';

const Button = styled.button`
    color: ${(props) => props.theme.icon.color};
    padding: 5px;
    fontsize: 10px;
    cursor: pointer;
    background: none;
    border: none;
    margin: 'auto 0 auto 0';
    vertical-align: middle;
`;

const ThemeSwitcher = () => {
    const themeContext = useContext(ThemeContext);
    const { theme, toggleTheme } = useTheme();

    const handleClick = () => {
        const newTheme = toggleTheme();
        themeContext.setSelectedTheme(newTheme);
    };

    return (
        <IconContext.Provider value={{ size: '1.5rem', margin: 'auto 0 auto 0' }}>
            <Button>
                {theme && theme.type === 'dark' ? (
                    <CgSun onClick={handleClick} />
                ) : (
                    <CgMoon onClick={handleClick} />
                )}
            </Button>
        </IconContext.Provider>
    );
};

export default ThemeSwitcher;
