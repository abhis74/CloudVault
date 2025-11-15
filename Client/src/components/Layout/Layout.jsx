import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <div className="layout_body">
                <Sidebar />
                {children}
            </div>
        </div>
    );
};

export default Layout;
