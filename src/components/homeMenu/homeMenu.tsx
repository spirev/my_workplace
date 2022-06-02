import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';


export function HomeMenu(props: any) {

    const menuIconeStyle = {
        color: 'white',
        fontSize: '2.5rem',
        cursor: 'pointer',
    };

    return (
        <IconButton>
            <MenuIcon style={menuIconeStyle} />
        </IconButton>
    );
};