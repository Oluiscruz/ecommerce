import { useContext } from 'react';
import './Cart.scss';
import AppContext from '../context/AppContext';
import CartItem from '../cart-item/cart';
import formatCurrency from '../../utili/formatCurrency';

export default function CartShopping() {

    const { cartItens, isCartVisible } = useContext(AppContext);

    const totalPrice = cartItens.reduce((acumulator, item) => item.price + acumulator, 0);

    return (
        <section className={`cart ${isCartVisible ? 'cart--active' : ''} `}>
            <div className="cart-item">
                {cartItens.map((cartItem) => <CartItem key={CartItem.id} data={cartItem} />)}
            </div>
            <div className="cart-resume-title">Total</div>
            <div className="cart-resume">
                {formatCurrency(totalPrice, 'BRL')}
            </div>
        </section>
    )
}