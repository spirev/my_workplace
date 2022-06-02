import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


export function HomeMenu(props: any) {

    const menuContainerStyle = {
        zIndex: 10,
    }

    const menuIconeStyle = {
        color: 'white',
        fontSize: '2.5rem',
        cursor: 'pointer',
    };

    return (
        <header style={menuContainerStyle}>
            <IconButton>
                <MenuIcon style={menuIconeStyle} />
            </IconButton>
        </header>
    );
};