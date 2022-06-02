import { HomeMenu } from "../components/homeMenu/homeMenu";

export function Homepage(props: any) {

    return (
        <>
            <HomeMenu />
            <main>
                <div>app container</div>
            </main>
            <footer>
                will have 'contact' button ( text only no background ) wich deploy a litle window from the bottom of the page ( ready arena liek )
            </footer>
        </>
    );
}