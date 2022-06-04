import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import { CSSProperties } from 'react';

export function Header() {

    const headerStyle: CSSProperties = {
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        padding: '14px 20px 0px 20px',
    };
    
    const menuIconeStyle: CSSProperties = {
        color: 'white',
        fontSize: '2.2rem',
        cursor: 'pointer',
    };

    return (
        <header style={headerStyle}>
            <IconButton >
                <MenuIcon style={menuIconeStyle} />
            </IconButton>
            <div>
                <Switch
                size='medium'
                defaultChecked />
                <IconButton>
                    <PersonIcon
                    style={menuIconeStyle}
                    onClick={() => console.log('click on profil')} />
                </IconButton>
            </div>
        </header>
    );
}

export default Header;