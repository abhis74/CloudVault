import React, { useState, useEffect } from 'react';
import WelcomeSection from '../../components/UI/WelcomeSection/WelcomeSection';
import FileFilters from '../../components/UI/FileFilters/FileFilters';
import FileToolbar from '../../components/UI/FileToolbar/FileToolbar';
import FileGrid from '../../components/FileManagement/FileGrid/FileGrid';
import FileList from '../../components/FileManagement/FileList/FileList';
import './SharedPage.css';

const SharedPage = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSharedFiles();
    }, []);

    const fetchSharedFiles = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API endpoint
            // const response = await fetch('/api/files/shared');
            // const data = await response.json();
            // setFiles(data.files);

            // Mock data for now
            const mockFiles = [];
            setFiles(mockFiles);
        } catch (error) {
            console.error('Error fetching shared files:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="shared-page">
            <div className="shared-page_header">
                <WelcomeSection />
                <FileFilters />
                <FileToolbar viewMode={viewMode} onViewModeChange={setViewMode} />
            </div>
            <div className="shared-page_content">
                {loading ? (
                    <div className="shared-page_loading">Loading...</div>
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

export default SharedPage;

