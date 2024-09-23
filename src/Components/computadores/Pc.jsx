import fetchProducts from "../../API/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.scss";
import  { useState, useEffect } from 'react';


export default function Computadores() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts('computadore').then((response) => {
            setProducts(response);
        })
    }, [])

    return (
        <div className="products container">

            {
                products.map((product) => <ProductCard key={product.id} data={product} />)
            }

        </div>
    )
}