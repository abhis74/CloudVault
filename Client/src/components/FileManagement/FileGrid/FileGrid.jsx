import React from 'react';
import FileCard from '../FileCard/FileCard';
import './FileGrid.css';

const FileGrid = () => {
    // Mock data - replace with actual data from API
    const files = [
        {
            id: 1,
            name: 'Diwali 2025',
            type: 'folder',
            size: '1.66KB',
            modifiedDate: '17 Oct, 2025',
            owner: 'You',
            lastOpened: '35 mins ago'
        },
        {
            id: 2,
            name: 'Wedding',
            type: 'video',
            size: '2.3GB',
            modifiedDate: '15 Oct, 2025',
            owner: 'You',
            lastOpened: '1 hour ago'
        },
        {
            id: 3,
            name: 'Diwali 2025',
            type: 'folder',
            size: '1.66KB',
            modifiedDate: '17 Oct, 2025',
            owner: 'You',
            lastOpened: '35 mins ago'
        },
        {
            id: 4,
            name: 'Diwali 2025',
            type: 'folder',
            size: '1.66KB',
            modifiedDate: '17 Oct, 2025',
            owner: 'You',
            lastOpened: '35 mins ago'
        }
    ];

    return (
        <div className="file-grid">
            {files.map((file) => (
                <FileCard key={file.id} file={file} />
            ))}
        </div>
    );
};

export default FileGrid;
