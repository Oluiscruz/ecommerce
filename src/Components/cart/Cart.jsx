import { HiOutlineShoppingCart } from "react-icons/hi";
import './Cart.scss';

export default function Cart() {
    return (
        <div className="cart">
            <button type="button">
                <HiOutlineShoppingCart />
                <span className="status">1</span>
            </button>
        </div>
    )
}
