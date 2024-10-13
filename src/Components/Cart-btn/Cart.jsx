import { HiOutlineShoppingCart } from "react-icons/hi";
import './btn.scss';
import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function CartIcon() {

    const { cartItens, isCartVisible, setCartVisible } = useContext(AppContext);

    return (
        <div className="cart-btn">
            <button 
            type="button"
            onClick={ () => setCartVisible(!isCartVisible)}>
                <HiOutlineShoppingCart />
                {cartItens.length > 0 && <span className="status">{cartItens.length}</span>}
        </button>
        </div >
    )
}
