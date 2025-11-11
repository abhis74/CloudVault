import React from 'react';
import CloudVaultIcon from '../../../assets/icons/cloud-vault.svg?react';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <CloudVaultIcon className="logo_icon" />
            <span className="logo_text">Cloud Vault</span>
        </div>
    );
};

export default Logo;
