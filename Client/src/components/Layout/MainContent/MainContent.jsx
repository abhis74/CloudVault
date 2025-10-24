import React from 'react';
import WelcomeSection from '../../UI/WelcomeSection/WelcomeSection';
import FileFilters from '../../UI/FileFilters/FileFilters';
import FileToolbar from '../../UI/FileToolbar/FileToolbar';
import FileGrid from '../../FileManagement/FileGrid/FileGrid';
import './MainContent.css';

const MainContent = () => {
    return (
        <main className="main-content">
            <div className="main-content__container">
                <div className="main-content__header">
                    <WelcomeSection />
                    <FileFilters />
                    <FileToolbar />
                </div>
                <div className="main-content__scrollable">
                    <FileGrid />
                </div>
            </div>

            {/* Background decorative element */}
            <div className="main-content__background">
                <div className="main-content__cloud-icon"></div>
            </div>
        </main>
    );
};

export default MainContent;
