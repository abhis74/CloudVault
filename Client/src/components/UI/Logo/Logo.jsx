import React from 'react';
import CloudVaultIcon from '../../../assets/icons/cloud-vault.svg?react';
import './Logo.css';

const Logo = () => {
    return (
        <div className="logo">
            <CloudVaultIcon className="logo__icon" />
            <span className="logo__text">Cloud Vault</span>
        </div>
    );
};

export default Logo;
