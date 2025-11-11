import React from 'react';
import FolderIcon from '../../../assets/icons/folder.svg?react';
import './SharedFilesList.css';

const SharedFilesList = ({ items = [] }) => {
    return (
        <div className="shared-files-list">
            <h2 className="shared-files-list_title">Shared Files/Folders</h2>
            <div className="shared-files-list_items">
                {items.map((item, index) => (
                    <div key={index} className="shared-files-list_item">
                        <div className="shared-files-list_icon">
                            <FolderIcon />
                        </div>
                        <div className="shared-files-list_content">
                            <div className="shared-files-list_name">{item.name}</div>
                            <div className="shared-files-list_meta">
                                <span className="shared-files-list_date">{item.date}</span>
                                <span className="shared-files-list_members">
                                    <span className="shared-files-list_members-icon">👥</span>
                                    {item.members} Members
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SharedFilesList;

