import React from 'react';
import SettingsIcon from '../../../assets/icons/settings.svg?react';
import BellIcon from '../../../assets/icons/bell.svg?react';
import UserIcon from '../../../assets/icons/user.svg?react';
import './UserActions.css';

const UserActions = () => {
    return (
        <div className="user-actions">
            <button className="user-actions_button" title="Help">
                <span style={{ fontSize: '18px', fontWeight: '600' }}>?</span>
            </button>
            <button className="user-actions_button" title="Notifications">
                <BellIcon className="user-actions_icon" />
            </button>
            <button className="user-actions_button" title="Settings">
                <SettingsIcon className="user-actions_icon" />
            </button>
            <button className="user-actions_button user-actions_button--profile" title="Profile">
                <UserIcon className="user-actions_icon" />
            </button>
        </div>
    );
};

export default UserActions;
