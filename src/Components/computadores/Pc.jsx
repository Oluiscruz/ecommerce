import fetchProducts from "../../API/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.scss";
import Loading from "../Loading/loading";

import  { useState, useEffect } from 'react';


export default function Computadores() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetchProducts('computadore').then((response) => {
            setProducts(response);
            setLoading(false);
        })
    }, [])

    return (
        (loading && <Loading />) ||  (
            <section className="products container">
                {products.map((product) => <ProductCard key={product.id} data={product} />)}
            </section>
            )
    )
}