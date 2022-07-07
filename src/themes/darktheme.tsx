import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    test: string;
    backgroundColor: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    test?: string;
    backgroundColor?: string;
  }
}

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#1a419c',
    },
    secondary: {
      main: '#00ffff',
    },
    text: { primary: '#FFFFFF' },
  },
  backgroundColor: '#0a0d1c',
  test: '#f542d7',
});

export default darkTheme;
