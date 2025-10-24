import React, { useState } from 'react';
import './FileFilters.css';

const FileFilters = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All Files' },
        { id: 'folders', label: 'Folders' },
        { id: 'photos', label: 'Photos' },
        { id: 'videos', label: 'Videos' },
        { id: 'audios', label: 'Audios' },
        { id: 'documents', label: 'Document' }
    ];

    return (
        <div className="file-filters">
            <div className="file-filters__list">
                {filters.map((filter) => (
                    <button
                        key={filter.id}
                        className={`file-filters__button ${activeFilter === filter.id ? 'file-filters__button--active' : ''
                            }`}
                        onClick={() => setActiveFilter(filter.id)}
                    >
                        {filter.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FileFilters;
