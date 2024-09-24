import './searchRes.scss';
import { IoSearch } from "react-icons/io5";
import { useContext, useState } from 'react';
import fetchProducts from '../../API/fetchProducts';
import AppContext from '../context/AppContext';


export default function Search() {

    const { setProducts, setLoading } = useContext(AppContext);
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();

        const products = await fetchProducts(searchValue);

        setProducts(products);
        setLoading(false)
        setSearchValue('');
    }

    return (
        <form className="searchResponse" onSubmit={handleSearch}>
            <input type="search"
                value={searchValue}
                placeholder="Buscar produtos"
                onChange={({ target }) => setSearchValue(target.value)}
                required />

            <button
                className="search-btn-res"
                type="submit">
                <IoSearch />

            </button>
        </form>
    )
}

