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
            <SearchIcon className="search-bar_icon" />
            <input
                type="text"
                placeholder="Search in CloudVault"
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar_input"
            />
        </div>
    );
};

export default SearchBar;
