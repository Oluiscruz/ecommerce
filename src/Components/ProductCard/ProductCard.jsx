import './ProductCard.scss';
import { FaBasketShopping } from "react-icons/fa6";
import propTypes from 'prop-types';
import formatCurrency from '../../utili/formatCurrency';
import { useContext } from 'react';
import AppContext from '../context/AppContext';


export default function ProductCard({ data }) {

    const { title, price, thumbnail } = data;
    const { cartItens, setCartItens } = useContext(AppContext);

    const handleAddCart = () => setCartItens([ ... cartItens, data]);


    return (
        <section className="product-card">
            <img src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
                alt="product"
                className='image-card' />

            <div className="card-infos">
                <h2 className="card-prices">{formatCurrency(price, 'BRL')}
                </h2>
                <h2 className="card-titles">{title}</h2>
            </div>

            <button className="add-cart-btn"
            onClick={handleAddCart}>
                <FaBasketShopping />
            </button>
        </section>
    );
}

ProductCard.propTypes = {
    data: propTypes.shape({}),
}.isRequired;