import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import { CSSProperties, useContext, useEffect } from 'react';
import { CustomTheme } from '../../theme';
import './Header.css';

export function Header() {

    const customThemeFunction = CustomTheme();
    const theme = customThemeFunction.theme;

    const headerStyle: CSSProperties = {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        padding: '14px 20px 0px 20px',
    };

    const menuIconeStyle: CSSProperties = {
        color: theme.icon.color,
        fontSize: '2.2rem',
        cursor: 'pointer',
    };

    useEffect(() => {
        console.log('header themeName -> ' + customThemeFunction.themeName);
      }, [customThemeFunction])

    return (
        <header style={headerStyle}>
            <IconButton >
                <MenuIcon style={menuIconeStyle} />
            </IconButton>
            <div>
                <Switch
                    size='medium'
                    defaultChecked={false}
                    onChange={customThemeFunction.switchTheme}
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