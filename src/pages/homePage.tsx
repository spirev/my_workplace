import { CSSProperties, useState } from "react";
import { Header } from "../components/Header/Header";
// import { useTheme } from "../theme";


export function Homepage(props: any) {

    // const [theme, setTheme] = useTheme();
    const [displayedApp, setDisplayedApp] = useState('lifeTracker');

    const mainStyle: CSSProperties = {
        display: 'flex',
        flexFlow: 'column wrap',
        width: '100%',
    };

    return (
        <>
            <main style={mainStyle}>
                <Header />
                <div>app container</div>
                <div style={{ color: props.theme }}>hello ?</div>
            </main>
        </>
    );
}