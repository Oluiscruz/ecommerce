import fetchProducts from "../../API/fetchProducts";
import ProductCard from "../ProductCard/ProductCard";
import "./Products.scss";
import  { useState, useEffect } from 'react';


export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts('celular').then((response) => {
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