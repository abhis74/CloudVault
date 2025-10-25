import React from 'react';
import GridIcon from '../../../assets/icons/grid.svg?react';
import SettingsIcon from '../../../assets/icons/settings.svg?react';
import BellIcon from '../../../assets/icons/bell.svg?react';
import UserIcon from '../../../assets/icons/user.svg?react';
import './UserActions.css';

const UserActions = () => {
    return (
        <div className="user-actions">
            <button className="user-actions__button" title="Grid View">
                <GridIcon className="user-actions__icon" />
            </button>
            <button className="user-actions__button" title="Settings">
                <SettingsIcon className="user-actions__icon" />
            </button>
            <button className="user-actions__button" title="Notifications">
                <BellIcon className="user-actions__icon" />
            </button>
            <button className="user-actions__button user-actions__button--profile" title="Profile">
                <UserIcon className="user-actions__icon" />
            </button>
        </div>
    );
};

export default UserActions;
