import MainNavigation from "../components/MainNavigation";


function ErrorPage() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An error occored!</h1>
                <p>Could not fount page!</p>
            </main>
        </>
    )
};

export default ErrorPage;