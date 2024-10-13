import "./cart.scss"
import { BsFillCartXFill } from "react-icons/bs";
import propTypes from 'prop-types';
import formatCurrency from "../../utili/formatCurrency";
import { useContext } from "react";
import AppContext from "../context/AppContext";


export default function CartItem({data}) {

    const {cartItens, setCartItens} = useContext(AppContext);
    const { id, thumbnail, title, price} = data;

    const handdleRemove = () => {
        const updateItens = cartItens.filter((item) => item.id != id);
        setCartItens(updateItens);
    }

    return (
        <section className="cart-itens">
            <img src={thumbnail}
                alt="Imagem do produto"
                className="img-itens-cart" />

            <div className="cart-item-content">
                <h3 className="cart-item-title">{title}</h3>
                <h4 className="cart-item-price">{formatCurrency(price, 'BRL')}</h4>

                <button type="button"
                    className="btn-remove-item"
                    onClick={handdleRemove}>
                    <BsFillCartXFill />
                </button>
            </div>
        </section>
    )
}

CartItem.propTypes = {
    data: propTypes.object
}.isRequired;