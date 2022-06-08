import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import { CSSProperties, useEffect, useState } from 'react';
import { darkTheme, lightTheme, useCustomTheme } from '../../theme';

export function Header() {

    const [theme, setTheme] = useCustomTheme();

    const headerStyle: CSSProperties = {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        padding: '14px 20px 0px 20px',
    };
    
    const menuIconeStyle: CSSProperties = {
        color: theme.palette.primary.main,
        fontSize: '2.2rem',
        cursor: 'pointer',
    };

    function switchTheme(evt: any) {
        let newTheme = theme === lightTheme ? darkTheme : lightTheme;
        setTheme(newTheme);
    };

    return (
        <header style={headerStyle}>
            <IconButton >
                <MenuIcon style={menuIconeStyle} />
            </IconButton>
            <div>
                <Switch
                size='medium'
                defaultChecked
                onChange={(evt) => switchTheme(evt)}
                />
                <IconButton>
                    <PersonIcon
                    style={menuIconeStyle}
                 />
                </IconButton>
            </div>
        </header>
    );
}

export default Header;