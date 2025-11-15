import React from 'react';
import Logo from '../../UI/Logo/Logo';
import Navigation from '../../Navigation/Navigation';
import StorageIndicator from '../../UI/StorageIndicator/StorageIndicator';
import NewButton from '../../UI/NewButton/NewButton';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar_content">
                <div className="sidebar_logo">
                    <Logo />
                </div>
                <div className="sidebar_top">
                    <NewButton />
                </div>

                <div className="sidebar_navigation">
                    <Navigation />
                </div>

                <div className="sidebar_bottom">
                    <StorageIndicator />
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
