import React, { useState, useEffect } from "react";
import "./Products.css";

import ProductCard from "../ProductCard/ProductCard";
import fetchProducts from "../../api/fetchProducts"


function Products() {
    const [products, setProducts] = useState([])
    const [searchProducts, setSearchProducts] = useState('placa mãe b550')

    // const setSearch = (value_search) => {
    //     setSearchProducts(value_search)
    // }

    useEffect(() => {
        fetchProducts(searchProducts).then((response) => {
            setProducts(response)
            console.log(products);
        })
    }, [])


    return (
        <section className="products__container">
            {products.map((product) => <ProductCard key={products.id} data={product} />)}
        </section>
    );
}

export default Products;
