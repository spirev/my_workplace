import { createTheme } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1a419c',
    },
    secondary: {
      main: '#3236a8',
    },
    text: { primary: '#000000' },
    background: { default: '#c2e4ff' },
  },
});

export default lightTheme;
