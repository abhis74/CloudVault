import React from 'react';
import HomeIcon from '../../../assets/icons/home.svg?react';
import FolderIcon from '../../../assets/icons/folder.svg?react';
import ShareIcon from '../../../assets/icons/share.svg?react';
import StarIcon from '../../../assets/icons/star.svg?react';
import ClockIcon from '../../../assets/icons/clock.svg?react';
import TrashIcon from '../../../assets/icons/trash.svg?react';
import './NavigationItem.css';

const NavigationItem = ({ id, label, icon, active = false }) => {
    const getIcon = () => {
        const iconProps = { className: 'navigation-item__icon' };

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
        <li className="navigation-item">
            <button
                className={`navigation-item__button ${active ? 'navigation-item__button--active' : ''}`}
                onClick={() => console.log(`Navigate to ${id}`)}
            >
                {getIcon()}
                <span className="navigation-item__label">{label}</span>
            </button>
        </li>
    );
};

export default NavigationItem;
