import React, { useState } from 'react';
import FilterIcon from '../../../assets/icons/filter.svg?react';
import GridViewIcon from '../../../assets/icons/grid-view.svg?react';
import ListViewIcon from '../../../assets/icons/list-view.svg?react';
import './FileToolbar.css';

const FileToolbar = () => {
    const [viewMode, setViewMode] = useState('grid');

    return (
        <div className="file-toolbar">
            <div className="file-toolbar__left">
                <button className="file-toolbar__filter">
                    <FilterIcon className="file-toolbar__icon" />
                </button>

                <div className="file-toolbar__dropdowns">
                    <select className="file-toolbar__dropdown">
                        <option>Modified</option>
                    </select>
                    <select className="file-toolbar__dropdown">
                        <option>File Type</option>
                    </select>
                    <select className="file-toolbar__dropdown">
                        <option>Shared</option>
                    </select>
                </div>
            </div>

            <div className="file-toolbar__right">
                <div className="file-toolbar__view-toggle">
                    <button
                        className={`file-toolbar__view-button ${viewMode === 'grid' ? 'file-toolbar__view-button--active' : ''
                            }`}
                        onClick={() => setViewMode('grid')}
                        title="Grid View"
                    >
                        <GridViewIcon className="file-toolbar__icon" />
                    </button>
                    <button
                        className={`file-toolbar__view-button ${viewMode === 'list' ? 'file-toolbar__view-button--active' : ''
                            }`}
                        onClick={() => setViewMode('list')}
                        title="List View"
                    >
                        <ListViewIcon className="file-toolbar__icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileToolbar;
