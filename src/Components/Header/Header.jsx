
import Cart from '../cart/Cart'
import Search from '../search/search'
import './Header.scss';
import { CiShoppingTag } from "react-icons/ci";


export default function Header() {

    return (
        <div className="header">
            <div className="container">
                <h1><a href="#">ShopBuy <CiShoppingTag /></a></h1>
                <Search />
                <div className="cart">
                    <Cart />
                </div>
            </div>
        </div>
    )

}