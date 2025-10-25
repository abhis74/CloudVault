import React, { useState } from 'react';
import SearchIcon from '../../../assets/icons/search.svg?react';
import './SearchBar.css';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="search-bar">
            <SearchIcon className="search-bar__icon" />
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar__input"
            />
        </div>
    );
};

export default SearchBar;
