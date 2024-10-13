import propTypes from "prop-types"
import AppContext from "./AppContext";
import { useState } from "react";

function Provider({children}) {

    const [cartItens, setCartItens] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCartVisible, setCartVisible] = useState(true);


    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItens,
        setCartItens,
        isCartVisible, 
        setCartVisible,
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
      );
}

export default Provider;

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;