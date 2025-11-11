import React, { useState, useEffect } from 'react';
import WelcomeSection from '../../components/UI/WelcomeSection/WelcomeSection';
import FileFilters from '../../components/UI/FileFilters/FileFilters';
import FileToolbar from '../../components/UI/FileToolbar/FileToolbar';
import FileGrid from '../../components/FileManagement/FileGrid/FileGrid';
import FileList from '../../components/FileManagement/FileList/FileList';
import './VaultPage.css';

const VaultPage = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // TODO: Replace with actual API call
        // Example: fetchVaultFiles()
        fetchVaultFiles();
    }, []);

    const fetchVaultFiles = async () => {
        try {
            setLoading(true);
            // TODO: Replace with actual API endpoint
            // const response = await fetch('/api/files/vault');
            // const data = await response.json();
            // setFiles(data.files);

            // Mock data for now
            const mockFiles = [
                {
                    id: 1,
                    name: 'Sales Data',
                    type: 'folder',
                    size: '1.66KB',
                    modifiedDate: '17 Oct, 2025',
                    owner: 'You',
                    lastOpened: '35 mins ago'
                },
                {
                    id: 2,
                    name: 'Wedding Video',
                    type: 'video',
                    size: '1.66KB',
                    modifiedDate: '17 Oct, 2025',
                    owner: 'You',
                    lastOpened: '35 mins ago'
                },
                {
                    id: 3,
                    name: 'Certificate',
                    type: 'document',
                    size: '1.66KB',
                    modifiedDate: '17 Oct, 2025',
                    owner: 'You',
                    lastOpened: '35 mins ago'
                },
                {
                    id: 4,
                    name: 'Call Recording',
                    type: 'audio',
                    size: '1.66KB',
                    modifiedDate: '17 Oct, 2025',
                    owner: 'You',
                    lastOpened: '35 mins ago'
                }
            ];
            setFiles(mockFiles);
        } catch (error) {
            console.error('Error fetching vault files:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="vault-page">
            <div className="vault-page_header">
                <WelcomeSection />
                <FileFilters />
                <FileToolbar viewMode={viewMode} onViewModeChange={setViewMode} />
            </div>
            <div className="vault-page_content">
                {loading ? (
                    <div className="vault-page_loading">Loading...</div>
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

export default VaultPage;

