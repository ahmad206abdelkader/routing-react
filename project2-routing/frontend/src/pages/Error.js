import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
    const error = useRouteError();

    let title = 'An error occurred!';
    let message = 'Somthing went wrong';

    if (error.status === 500) {
        message = JSON.parse(error.data).message;
    }

    if (error.status === 404) {
        title = 'Not fount'
        message = 'could not find resource or page!'
    }

    return (
        <>
            <MainNavigation />
            <PageContent title={title} >
                <p>{message}</p>
            </PageContent>
        </>
    );
};

export default ErrorPage;