import React from 'react';
import { useLocation } from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';
import './Navigation.css';

const Navigation = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navigationItems = [
        { id: 'home', label: 'Home', icon: 'home', path: '/' },
        { id: 'vault', label: 'My Vault', icon: 'folder', path: '/vault' },
        { id: 'shared', label: 'Shared with me', icon: 'share', path: '/shared' },
        { id: 'starred', label: 'Starred', icon: 'star', path: '/starred' },
        { id: 'recents', label: 'Recents', icon: 'clock', path: '/recents' },
        { id: 'trash', label: 'Trash', icon: 'trash', path: '/trash' }
    ];

    return (
        <nav className="navigation">
            <ul className="navigation_list">
                {navigationItems.map((item) => {
                    const isActive = currentPath === item.path ||
                        (item.path === '/' && currentPath === '/') ||
                        (item.path !== '/' && currentPath.startsWith(item.path));
                    return (
                        <NavigationItem
                            key={item.id}
                            id={item.id}
                            label={item.label}
                            icon={item.icon}
                            path={item.path}
                            active={isActive}
                        />
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navigation;
