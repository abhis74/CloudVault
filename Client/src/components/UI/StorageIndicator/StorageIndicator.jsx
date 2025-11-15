import React from 'react';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg?react';
import './StorageIndicator.css';

const StorageIndicator = () => {
    const usedSpace = 10.66;
    const totalSpace = 15;
    const percentage = (usedSpace / totalSpace) * 100;

    return (
        <div className="storage-indicator">
            <div className="storage-indicator_header">
                <h3 className="storage-indicator_title">Storage (90% Full)</h3>
            </div>

            <div className="storage-indicator_progress">
                <div className="storage-indicator_bar">
                    <div
                        className="storage-indicator_fill"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                <div className="storage-indicator_text">
                    {usedSpace} GB of {totalSpace} GB used
                </div>
            </div>

            <button className="storage-indicator_button">
                <span>Get more space</span>
                <ArrowRightIcon className="storage-indicator_icon" />
            </button>
        </div>
    );
};

export default StorageIndicator;
