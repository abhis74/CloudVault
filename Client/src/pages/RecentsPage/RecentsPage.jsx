import React, { useState, useEffect } from 'react';
import WelcomeSection from '../../components/UI/WelcomeSection/WelcomeSection';
import FileFilters from '../../components/UI/FileFilters/FileFilters';
import FileToolbar from '../../components/UI/FileToolbar/FileToolbar';
import FileGrid from '../../components/FileManagement/FileGrid/FileGrid';
import FileList from '../../components/FileManagement/FileList/FileList';
import './RecentsPage.css';

const RecentsPage = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchRecentFiles();
    }, []);

    const fetchRecentFiles = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API endpoint
            // const response = await fetch('/api/files/recents');
            // const data = await response.json();
            // setFiles(data.files);

            // Mock data for now
            const mockFiles = [];
            setFiles(mockFiles);
        } catch (error) {
            console.error('Error fetching recent files:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="recents-page">
            <div className="recents-page_header">
                <WelcomeSection />
                <FileFilters />
                <FileToolbar viewMode={viewMode} onViewModeChange={setViewMode} />
            </div>
            <div className="recents-page_content">
                {loading ? (
                    <div className="recents-page_loading">Loading...</div>
                ) : (
                    viewMode === 'grid' ? (
                        <FileGrid files={files} />
                    ) : (
                        <FileList files={files} />
                    )
                )}
            </div>
        </div>
    );
};

export default RecentsPage;

