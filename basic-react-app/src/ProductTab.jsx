import Product from "./Product.jsx";

function ProductTab() {
    return (
        <>
            <Product title="phone" price={70000}/>
            <Product title="laptop" price={100000}/>
            <Product title="pen" price={70}/>
        </>
    )
}
export default ProductTab;