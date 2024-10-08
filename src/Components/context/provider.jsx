import propTypes from "prop-types"
import AppContext from "./AppContext";
import { useState } from "react";

function Provider({children}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    const value = {
        products,
        setProducts,
        loading,
        setLoading
    }
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