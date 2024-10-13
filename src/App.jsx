import CartShopping from './Components/CartShopping/Cart';
import Provider from './Components/context/provider';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/Header';
import Iphones from './Components/Iphones/Iphone';
import Subtitle from './Components/subtitle/subtitle';


export default function App() {
  return (
    <Provider>
    <Header />
    <Subtitle />
    <Iphones />
    <Footer />
    <CartShopping />
    </Provider>
  )
}
