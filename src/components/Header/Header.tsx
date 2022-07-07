import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import { CSSProperties, useContext } from 'react';
import { CustomThemeContext, useTheme } from '../../themes/CustomThemeProvider';
import './Header.css';

export function Header() {
    const { theme } = useTheme();
    const { toggleTheme } = useContext<any>(CustomThemeContext);

    const headerStyle: CSSProperties = {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        padding: '14px 20px 0px 20px',
    };

    const menuIconeStyle: CSSProperties = {
        color: theme.palette.text.primary,
        fontSize: '2.2rem',
        cursor: 'pointer',
    };

    function themeSwitchHandler() {
        toggleTheme();
    };

    return (
        <header style={headerStyle}>
            <IconButton >
                <MenuIcon style={menuIconeStyle} />
            </IconButton>
            <div>
                <Switch
                    size='medium'
                    defaultChecked={false}
                    onChange={themeSwitchHandler}
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