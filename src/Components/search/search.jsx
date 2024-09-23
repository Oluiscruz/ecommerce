import './search.scss';
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';

export default function Search() {

    const [searchValue, setSearchValue] = useState('');

    return (
        <form className="search">

            <input type="search"
                value={searchValue}
                placeholder="Buscar produtos"
                onChange={({ target }) => setSearchValue(target.value)}
                required />
            <button
                className="search-btn"
                type="submit">
                <IoSearch />
            </button>
        </form>
    )
}
