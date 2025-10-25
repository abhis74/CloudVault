import React from 'react';
import Navigation from '../../Navigation/Navigation';
import StorageIndicator from '../../UI/StorageIndicator/StorageIndicator';
import NewButton from '../../UI/NewButton/NewButton';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar__content">
                <div className="sidebar__top">
                    <NewButton />
                </div>

                <div className="sidebar__navigation">
                    <Navigation />
                </div>

                <div className="sidebar__bottom">
                    <StorageIndicator />
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="sidebar__background">
                <div className="sidebar__cloud-icon"></div>
                <div className="sidebar__folder-icon"></div>
            </div>
        </aside>
    );
};

export default Sidebar;
