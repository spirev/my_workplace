import darkTheme from "./darktheme";
import lightTheme from "./lightTheme";
import { Theme, ThemeProvider } from '@mui/material';
import { createContext, useContext, useEffect, useState } from 'react';

export type ThemeName = 'darkTheme' | 'lightTheme';

interface CustomThemeContextSpec {
  themeName: ThemeName,
  theme: Theme,
}

const themeFromThemeName: { [key in ThemeName]: Theme } = {
  darkTheme: darkTheme,
  lightTheme: lightTheme,
};

export const CustomThemeContext = createContext<CustomThemeContextSpec | undefined>(undefined);

function CustomThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>('darkTheme');

  const contextValue = {
    themeName: theme,
    theme: themeFromThemeName[theme],
    toggleTheme: () => {
      let newTheme: ThemeName = theme === 'darkTheme' ? 'lightTheme' : 'darkTheme';
      setTheme(newTheme);
    }
  };

  useEffect(() => {
    setTheme('darkTheme');
  }, []);

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={contextValue.theme}>
        {children}
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
}

export function useTheme(): CustomThemeContextSpec {
  const context = useContext(CustomThemeContext);
  if (!context) throw new Error('Use theme context outside provider');
  return context;
}

export default CustomThemeProvider;