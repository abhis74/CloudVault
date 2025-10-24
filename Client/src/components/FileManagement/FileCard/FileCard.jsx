import React from 'react';
import FolderIcon from '../../../assets/icons/folder.svg?react';
import VideoIcon from '../../../assets/icons/video.svg?react';
import DownloadIcon from '../../../assets/icons/download.svg?react';
import ShareIcon from '../../../assets/icons/share.svg?react';
import StarIcon from '../../../assets/icons/star.svg?react';
import MoreIcon from '../../../assets/icons/more.svg?react';
import './FileCard.css';

const FileCard = ({ file }) => {
    const getFileIcon = () => {
        switch (file.type) {
            case 'folder':
                return <FolderIcon className="file-card__main-icon" />;
            case 'video':
                return <VideoIcon className="file-card__main-icon" />;
            default:
                return <FolderIcon className="file-card__main-icon" />;
        }
    };

    const getFileIconColor = () => {
        switch (file.type) {
            case 'folder':
                return '#3b82f6';
            case 'video':
                return '#ef4444';
            default:
                return '#3b82f6';
        }
    };

    return (
        <div className="file-card">
            <div className="file-card__header">
                <div className="file-card__title-section">
                    <div
                        className="file-card__small-icon"
                        style={{ color: getFileIconColor() }}
                    >
                        {file.type === 'folder' ? <FolderIcon /> : <VideoIcon />}
                    </div>
                    <span className="file-card__title">{file.name}</span>
                </div>

                <div className="file-card__actions">
                    <button className="file-card__action" title="Download">
                        <DownloadIcon />
                    </button>
                    <button className="file-card__action" title="Share">
                        <ShareIcon />
                    </button>
                    <button className="file-card__action" title="Star">
                        <StarIcon />
                    </button>
                    <button className="file-card__action" title="More options">
                        <MoreIcon />
                    </button>
                </div>
            </div>

            <div className="file-card__content">
                <div
                    className="file-card__main-icon-container"
                    style={{ color: getFileIconColor() }}
                >
                    {getFileIcon()}
                </div>
            </div>

            <div className="file-card__footer">
                <span className="file-card__last-opened">
                    You opened {file.lastOpened}
                </span>
            </div>
        </div>
    );
};

export default FileCard;
