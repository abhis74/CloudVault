import React from 'react';
import FolderIcon from '../../../assets/icons/folder.svg?react';
import VideoIcon from '../../../assets/icons/video.svg?react';
import DownloadIcon from '../../../assets/icons/download.svg?react';
import ShareIcon from '../../../assets/icons/share.svg?react';
import StarIcon from '../../../assets/icons/star.svg?react';
import MoreIcon from '../../../assets/icons/more.svg?react';
import UserIcon from '../../../assets/icons/user.svg?react';
import './FileList.css';

const FileList = ({ files = [] }) => {
    const getFileIcon = (type) => {
        switch (type) {
            case 'folder':
                return <FolderIcon className="file-list_icon" />;
            case 'video':
                return <VideoIcon className="file-list_icon" />;
            case 'document':
            case 'audio':
            case 'image':
            default:
                return <FolderIcon className="file-list_icon" />;
        }
    };

    const getFileIconColor = (type) => {
        switch (type) {
            case 'folder':
                return '#3b82f6';
            case 'video':
                return '#ef4444';
            case 'document':
                return '#3b82f6';
            case 'audio':
                return '#8b5cf6';
            case 'image':
                return '#10b981';
            default:
                return '#3b82f6';
        }
    };

    return (
        <div className="file-list">
            <table className="file-list_table">
                <thead>
                    <tr>
                        <th className="file-list_checkbox-col">
                            <input type="checkbox" />
                        </th>
                        <th className="file-list_name-col">File Name</th>
                        <th className="file-list_owner-col">Owner</th>
                        <th className="file-list_size-col">File Size</th>
                        <th className="file-list_date-col">Date Modified</th>
                        <th className="file-list_actions-col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file) => (
                        <tr key={file.id} className="file-list_row">
                            <td className="file-list_checkbox-col">
                                <input type="checkbox" />
                            </td>
                            <td className="file-list_name-col">
                                <div className="file-list_name-cell">
                                    <div
                                        className="file-list_icon-wrapper"
                                        style={{ color: getFileIconColor(file.type) }}
                                    >
                                        {getFileIcon(file.type)}
                                    </div>
                                    <span className="file-list_name">{file.name}</span>
                                </div>
                            </td>
                            <td className="file-list_owner-col">
                                <div className="file-list_owner-cell">
                                    <div className="file-list_owner-avatar">
                                        <UserIcon />
                                    </div>
                                    <span>{file.owner || 'You'}</span>
                                </div>
                            </td>
                            <td className="file-list_size-col">{file.size || '1.66KB'}</td>
                            <td className="file-list_date-col">
                                {file.modifiedDate || '17 Oct, 2025'} {file.owner || 'You'}
                            </td>
                            <td className="file-list_actions-col">
                                <div className="file-list_actions">
                                    <button className="file-list_action" title="Download">
                                        <DownloadIcon />
                                    </button>
                                    <button className="file-list_action" title="Share">
                                        <ShareIcon />
                                    </button>
                                    <button className="file-list_action" title="Star">
                                        <StarIcon />
                                    </button>
                                    <button className="file-list_action" title="More options">
                                        <MoreIcon />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FileList;

