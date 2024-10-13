
import Search from '../search/search'
import './Header.scss';
import { CiShoppingTag } from "react-icons/ci";
import Navbar from './navbar/navbar';
import CartIcon from '../Cart-btn/Cart';


export default function Header() {

    return (
        <div className="header">
            <div className="container">
                <Navbar />
                <h1><a href="#">ShopBuy <CiShoppingTag /></a></h1>
                <Search />
                <div className="cart-icon">
                    <CartIcon />
                </div>
            </div>
        </div>
    )

}