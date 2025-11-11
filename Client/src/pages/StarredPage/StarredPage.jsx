import React, { useState, useEffect } from 'react';
import WelcomeSection from '../../components/UI/WelcomeSection/WelcomeSection';
import FileFilters from '../../components/UI/FileFilters/FileFilters';
import FileToolbar from '../../components/UI/FileToolbar/FileToolbar';
import FileGrid from '../../components/FileManagement/FileGrid/FileGrid';
import FileList from '../../components/FileManagement/FileList/FileList';
import './StarredPage.css';

const StarredPage = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchStarredFiles();
    }, []);

    const fetchStarredFiles = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API endpoint
            // const response = await fetch('/api/files/starred');
            // const data = await response.json();
            // setFiles(data.files);

            // Mock data for now
            const mockFiles = [];
            setFiles(mockFiles);
        } catch (error) {
            console.error('Error fetching starred files:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="starred-page">
            <div className="starred-page_header">
                <WelcomeSection />
                <FileFilters />
                <FileToolbar viewMode={viewMode} onViewModeChange={setViewMode} />
            </div>
            <div className="starred-page_content">
                {loading ? (
                    <div className="starred-page_loading">Loading...</div>
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

export default StarredPage;

