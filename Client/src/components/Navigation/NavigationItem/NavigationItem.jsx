import React from 'react';
import HomeIcon from '../../../assets/icons/home.svg?react';
import FolderIcon from '../../../assets/icons/folder.svg?react';
import ShareIcon from '../../../assets/icons/share.svg?react';
import StarIcon from '../../../assets/icons/star.svg?react';
import ClockIcon from '../../../assets/icons/clock.svg?react';
import TrashIcon from '../../../assets/icons/trash.svg?react';
import './NavigationItem.css';
import { Link } from 'react-router-dom';

const NavigationItem = ({ id, label, icon, path, active = false }) => {
    const getIcon = () => {
        const iconProps = { className: 'navigation-item_icon' };

        switch (icon) {
            case 'home':
                return <HomeIcon {...iconProps} />;
            case 'folder':
                return <FolderIcon {...iconProps} />;
            case 'share':
                return <ShareIcon {...iconProps} />;
            case 'star':
                return <StarIcon {...iconProps} />;
            case 'clock':
                return <ClockIcon {...iconProps} />;
            case 'trash':
                return <TrashIcon {...iconProps} />;
            default:
                return <FolderIcon {...iconProps} />;
        }
    };

    return (
        <Link to={path} className="navigation-item">
            <button
                className={`navigation-item_button ${active ? 'navigation-item_button--active' : ''}`}
            >
                {getIcon()}
                <span className="navigation-item_label">{label}</span>
            </button>
        </Link>
    );
};

export default NavigationItem;
