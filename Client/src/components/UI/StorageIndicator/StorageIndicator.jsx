import React from 'react';
import ArrowRightIcon from '../../../assets/icons/arrow-right.svg?react';
import './StorageIndicator.css';

const StorageIndicator = () => {
    const usedSpace = 10.66;
    const totalSpace = 15;
    const percentage = (usedSpace / totalSpace) * 100;

    return (
        <div className="storage-indicator">
            <div className="storage-indicator__header">
                <h3 className="storage-indicator__title">Storage (90% Full)</h3>
            </div>

            <div className="storage-indicator__progress">
                <div className="storage-indicator__bar">
                    <div
                        className="storage-indicator__fill"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                <div className="storage-indicator__text">
                    {usedSpace} GB of {totalSpace} GB used
                </div>
            </div>

            <button className="storage-indicator__button">
                <span>Get more space</span>
                <ArrowRightIcon className="storage-indicator__icon" />
            </button>
        </div>
    );
};

export default StorageIndicator;
