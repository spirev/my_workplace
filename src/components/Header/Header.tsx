import { CSSProperties, useContext } from 'react';
import { CustomThemeContext, useTheme } from '../../themes/CustomThemeProvider';
import './Header.css';

import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';


export function Header() {
  const { theme } = useTheme();
  const { themeName, toggleTheme } = useContext<any>(CustomThemeContext);

  const headerIconsStyle: CSSProperties = {
    color: theme.palette.text.primary,
    fontSize: '2.2rem',
    cursor: 'pointer',
  };

  const themeSwitchStyle = {
    width: '58%',
    height: '80%',
    borderRadius: '20px',
    '.MuiSwitch-track': {
      backgroundColor: themeName === 'darkTheme' ? '#FFFFFF' : '#FFFFFF',
    },
    '& .MuiSwitch-switchBase': {
      '&.Mui-checked': {
        transform: 'translateX(40px)',
        '& + .MuiSwitch-track': {
          backgroundColor: 'rgb(136, 136, 136)',

        },
      },
    },
    'disabled': {
      backgroundColor: 'red',
    }
  }

  function themeSwitchHandler() {
    toggleTheme();
  };

  console.log(themeName);

  return (
    <header>
      <IconButton >
        <MenuIcon style={headerIconsStyle} id='headerIcons' />
      </IconButton>
      <div id='rightIconsContainer'>
        <Switch
          size='medium'
          defaultChecked={false}
          icon={<NightlightIcon color="secondary" />}
          checkedIcon={<WbSunnyIcon sx={{ borderRadius: '20px', color: 'black' }} />}
          onChange={themeSwitchHandler}
          sx={themeSwitchStyle}
        />
        <IconButton>
          <PersonIcon
            style={headerIconsStyle}
          />
        </IconButton>
      </div>
    </header>
  );
}

export default Header;