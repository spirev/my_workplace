import { useState } from "react";

function Theme() { 

    
    
    interface themeConf {
        themeName: string | null;
        theme: typeof darkTheme | typeof lightTheme | null;
    };
    
    const darkTheme = {
        name: 'darkTheme',
        background: '#1a2630',
        icon: {
            color: 'rgb(255, 50, 50)',
            fontSize: '2.2rem',
            cursor: 'pointer',
        }
    };
    
    const lightTheme = {
        name: 'lightTheme',
        background: '#7ba6c9',
        icon: {
            color: 'rgb(50, 250, 250)',
            fontSize: '2.2rem',
            cursor: 'pointer',
        }
    };
    
    const darkThemeConf: themeConf = {
        themeName: 'darkTheme',
        theme: darkTheme,
    }
    
    const lightThemeConf: themeConf = {
        themeName: 'lightTheme',
        theme: lightTheme,
    }

    let [themeName, setThemeName] = useState('darkTheme');
    let [theme, setTheme] = useState(darkThemeConf);
    
    function switchTheme() {
        const newTheme = theme.themeName === 'lightTheme' ? darkThemeConf : lightThemeConf;
        setTheme(newTheme);
    }
    
    return [themeName, theme]
}

export default Theme;