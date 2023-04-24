import { Link } from 'react-router-dom';

const PRODUCTS = [
    { id: 'p1', title: 'product-1' },
    { id: 'p2', title: 'product-2' },
    { id: 'p3', title: 'product-3' }
]

function ProductsPages() {
    return (
        <>
            <h1>The products Page</h1>
            <ul>
                {PRODUCTS.map(prod => <li key={prod.id}><Link to={prod.id} >{prod.title}</Link></li>)}
                {/* <li><Link to='products/product-1'>product 1</Link></li>
                <li><Link to='products/product-2'>product 2</Link></li>
                <li><Link to='products/product-3'>product 3</Link></li> */}
            </ul>
        </>)
        ;

}

export default ProductsPages;