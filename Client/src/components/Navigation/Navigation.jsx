import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './Navigation.css';

const Navigation = () => {
    const navigationItems = [
        { id: 'home', label: 'Home', icon: 'home', active: true },
        { id: 'vault', label: 'My Vault', icon: 'folder' },
        { id: 'shared', label: 'Shared with me', icon: 'share' },
        { id: 'starred', label: 'Starred', icon: 'star' },
        { id: 'recents', label: 'Recents', icon: 'clock' },
        { id: 'trash', label: 'Trash', icon: 'trash' }
    ];

    return (
        <nav className="navigation">
            <ul className="navigation__list">
                {navigationItems.map((item) => (
                    <NavigationItem
                        key={item.id}
                        id={item.id}
                        label={item.label}
                        icon={item.icon}
                        active={item.active}
                    />
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
