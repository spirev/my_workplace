import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';


export const darkTheme = createTheme({
    palette: {
        primary: {
            main: 'rgb(255, 0, 0)',
        },
    },
});

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: 'rgb(0, 255, 255)',
        },
    },
})

type ThemeName = typeof lightTheme | typeof darkTheme;

export function useCustomTheme(): [ThemeName, (newTheme: ThemeName) => void] {
    const [theme, setTheme] = useState<ThemeName>(darkTheme);
    return [theme, setTheme];
}

/**
 * plz try to to do it with provider to allow to pass an object like this :
 * 
 * const context = {
 *  name: string = 'lightTheme',
 *  theme: theme = lightTheme,
 * }
 * 
 * so you can access theme name as a string and theme object to style componenents
 */

// export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
//     const [theme] = useCustomTheme();

//     return (
//         <ThemeProvider theme={theme}>
//             {children}
//         </ThemeProvider>
//     )
// };