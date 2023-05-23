import React, { useState, useEffect } from "react";
import "./Products.css";

import ProductCard from "../ProductCard/ProductCard";
import fetchProducts from "../../api/fetchProducts"


function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts('Placa mae b550').then((response) => {
            setProducts(response)
            // console.log(products);
        })
    }, [])


    return (
        <section className="products__container">
            {
                products.map((product) => <ProductCard key={products.id} data={product} />)
            }
        </section>
    );
}

export default Products;
