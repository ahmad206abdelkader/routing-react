import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const params = useParams();


    return (
        <>
            <h1>product Details!</h1>
            <p>{params.productId}</p>
            <p><Link to=".." relative="path">Back</Link></p>
        </>
    );
};

export default ProductDetails;