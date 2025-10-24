import React from 'react';
import SearchBar from '../../UI/SearchBar/SearchBar';
import UserActions from '../../UI/UserActions/UserActions';
import Logo from '../../UI/Logo/Logo';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <Logo />
            </div>
            <div className="header__center">
                <SearchBar />
            </div>
            <div className="header__right">
                <UserActions />
            </div>
        </header>
    );
};

export default Header;
