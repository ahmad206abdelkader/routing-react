import { Link } from "react-router-dom";

function HomePage() {
    return (
        <>
            <h1>my home page</h1>
            <p>Go to <Link to="/products">the list of product</Link></p>
        </>
    );
};

export default HomePage;