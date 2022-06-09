import { useEffect, useState } from "react";

const darkTheme = {
    name: 'darkTheme',
    background: '#1a2630',
    icon: {
        color: 'white',
        fontSize: '2.2rem',
        cursor: 'pointer',
    }
};

const lightTheme = {
    name: 'lightTheme',
    background: '#7ba6c9',
    icon: {
        color: 'rgb(0, 56, 99)',
        fontSize: '2.2rem',
        cursor: 'pointer',
    }
};

export function CustomTheme() {
    const [themeName, setThemeName] = useState('darkTheme');
    const [theme, setTheme] = useState(darkTheme);

    function switchTheme() {
        const newThemeName: string = themeName === 'lightTheme' ? 'darkTheme' : 'lightTheme';
        const newTheme = theme === lightTheme ? darkTheme : lightTheme;
        setThemeName(newThemeName);
        setTheme(newTheme);
    };

    const customTheme = {
        themeName: themeName,
        theme: theme,
        switchTheme: switchTheme,
    }

    useEffect(() => {
        customTheme.themeName = themeName;
        customTheme.theme = theme;
    }, [themeName, theme, customTheme]);


    return customTheme;
};
