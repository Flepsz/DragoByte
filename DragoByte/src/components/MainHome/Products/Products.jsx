import { useState, useEffect } from "react";
import "./Products.css";

import ProductCard from "./ProductCard/ProductCard";
import fetchProducts from "../../../api/fetchProducts";

function Products({ searchProduct }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchProducts(searchProduct);
            setProducts(response);
            console.log(response);
        };

        fetchData();
    }, [searchProduct]);

    return (
        <section key={products.id} className="products__container">
            {products.map((product) => (
                <ProductCard key={products.id} data={product} />
            ))}

        </section>
    );
}

export default Products;
