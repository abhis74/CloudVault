import React from 'react';
import WelcomeSection from '../../components/UI/WelcomeSection/WelcomeSection';
import Dashboard from '../../components/Dashboard/Dashboard';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home-page">
            <div className="home-page_header">
                <WelcomeSection />
            </div>
            <div className="home-page_content">
                <Dashboard />
            </div>
        </div>
    );
};

export default HomePage;

