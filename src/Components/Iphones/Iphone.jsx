import fetchProducts from "../../API/fetchProducts";
import AppContext from "../context/AppContext";
import Loading from "../Loading/loading";
import ProductCard from "../ProductCard/ProductCard";
import "./iphone.scss";
import { useEffect, useContext } from 'react';


export default function Iphones() {
    const { products, setProducts, loading, setLoading } = useContext(AppContext);

    useEffect(() => {
        fetchProducts('oferta').then((response) => {
            setProducts(response);
            setLoading(false)
        })
    }, [])

    return (
        (loading && <Loading />) || (
            <section className="products container">
                {products.map((product) => <ProductCard key={product.id} data={product} />)}
            </section>
        )
    )
}