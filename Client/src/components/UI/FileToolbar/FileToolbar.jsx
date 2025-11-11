import React from 'react';
import FilterIcon from '../../../assets/icons/filter.svg?react';
import GridViewIcon from '../../../assets/icons/grid-view.svg?react';
import ListViewIcon from '../../../assets/icons/list-view.svg?react';
import './FileToolbar.css';

const FileToolbar = ({ viewMode, onViewModeChange }) => {
    return (
        <div className="file-toolbar">
            <div className="file-toolbar_left">
                <button className="file-toolbar_filter">
                    <FilterIcon className="file-toolbar_icon" />
                </button>

                <div className="file-toolbar_dropdowns">
                    <select className="file-toolbar_dropdown">
                        <option>Modified</option>
                    </select>
                    <select className="file-toolbar_dropdown">
                        <option>File Type</option>
                    </select>
                    <select className="file-toolbar_dropdown">
                        <option>Shared</option>
                    </select>
                </div>
            </div>

            <div className="file-toolbar_right">
                <div className="file-toolbar_view-toggle">
                    <button
                        className={`file-toolbar_view-button ${viewMode === 'grid' ? 'file-toolbar_view-button--active' : ''
                            }`}
                        onClick={() => onViewModeChange('grid')}
                        title="Grid View"
                    >
                        <GridViewIcon className="file-toolbar_icon" />
                    </button>
                    <button
                        className={`file-toolbar_view-button ${viewMode === 'list' ? 'file-toolbar_view-button--active' : ''
                            }`}
                        onClick={() => onViewModeChange('list')}
                        title="List View"
                    >
                        <ListViewIcon className="file-toolbar_icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FileToolbar;
