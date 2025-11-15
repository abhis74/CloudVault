import React from 'react';
import SearchBar from '../../UI/SearchBar/SearchBar';
import UserActions from '../../UI/UserActions/UserActions';
import Logo from '../../UI/Logo/Logo';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header_left">
                <Logo />
            </div>
            <div className="header_center">
                <SearchBar />
            </div>
            <div className="header_right">
                <UserActions />
            </div>
        </header>
    );
};

export default Header;
