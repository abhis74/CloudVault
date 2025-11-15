import React from 'react';
import SearchBar from '../../UI/SearchBar/SearchBar';
import UserActions from '../../UI/UserActions/UserActions';
import './MainContent.css';

const MainContent = ({ children }) => {
    return (
        <main className="main-content">
            <div className="main-content_container">
                <div className="main-content_top-bar">
                    <div className="main-content_top-bar-left">
                        <SearchBar />
                    </div>
                    <div className="main-content_top-bar-right">
                        <UserActions />
                    </div>
                </div>
                <div className="main-content_scrollable">
                    {children}
                </div>
            </div>
        </main>
    );
};

export default MainContent;
