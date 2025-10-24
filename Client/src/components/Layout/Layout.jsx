import React from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import MainContent from './MainContent/MainContent';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="layout__body">
                <Sidebar />
                <MainContent>
                    {children}
                </MainContent>
            </div>
        </div>
    );
};

export default Layout;
