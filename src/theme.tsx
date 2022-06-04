import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { createContext, useContext } from 'react';

let darkTheme = createTheme({
    palette: {
        primary: {
            main: 'rgb(0, 0, 0)',
        },
    },
});

let lightTheme = createTheme({
    palette: {
        primary: {
            main: 'rgb(255, 255, 255)',
        },
    },
})

// todo : get user theme value
let userTheme: string = "lightTheme";
let themeContextValue: any = undefined;
themeContextValue = userTheme === 'darkTheme' ? darkTheme : lightTheme; 
// const ThemeContext = createContext(userTheme);

// export function useTheme() {
//     const theme = useContext(ThemeContext);
//     return theme;
    
// };

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={themeContextValue}>
            {children}
        </ThemeProvider>
    )
};