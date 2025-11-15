import React, { useState, useEffect } from 'react';
import WelcomeSection from '../../components/UI/WelcomeSection/WelcomeSection';
import FileFilters from '../../components/UI/FileFilters/FileFilters';
import FileToolbar from '../../components/UI/FileToolbar/FileToolbar';
import FileGrid from '../../components/FileManagement/FileGrid/FileGrid';
import FileList from '../../components/FileManagement/FileList/FileList';
import './TrashPage.css';

const TrashPage = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchTrashFiles();
    }, []);

    const fetchTrashFiles = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API endpoint
            // const response = await fetch('/api/files/trash');
            // const data = await response.json();
            // setFiles(data.files);

            // Mock data for now
            const mockFiles = [];
            setFiles(mockFiles);
        } catch (error) {
            console.error('Error fetching trash files:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="trash-page">
            <div className="trash-page_header">
                <WelcomeSection />
                <FileFilters />
                <FileToolbar viewMode={viewMode} onViewModeChange={setViewMode} />
            </div>
            <div className="trash-page_content">
                {loading ? (
                    <div className="trash-page_loading">Loading...</div>
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

export default TrashPage;

