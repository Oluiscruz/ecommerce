import './SearchRes.scss';
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';

export default function SearchResponse() {

    const [searchValue, setSearchValue] = useState('');

    return (
        <form className="SearchResponse">

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
