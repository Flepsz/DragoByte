import React, { useState, useEffect } from "react";
import fetchProducts from "../../api/fetchProducts"

import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";

function Products() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProducts('iphone').then((response) => {
            setProducts(response)
            console.log(products);
        })
    }, [])


    return (
        <section className="products__container">
            <ProductCard />
        </section>
    );
}

export default Products;
