import React from 'react';
import './OverviewCard.css';

const OverviewCard = ({ title, icon: Icon, count, used, total, color, onView }) => {
    const percentage = (used / total) * 100;

    return (
        <div className={`overview-card overview-card--${color}`}>
            <div className="overview-card_header">
                <h3 className="overview-card_title">{title}</h3>
                {Icon && <Icon className="overview-card_icon" />}
            </div>
            <div className="overview-card_count">{count}</div>
            <div className="overview-card_progress">
                <div className="overview-card_progress-bar">
                    <div
                        className="overview-card_progress-fill"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                <div className="overview-card_progress-text">
                    <span>{used} GB</span>
                    <span>{total} GB</span>
                </div>
            </div>
            <button className="overview-card_button" onClick={onView}>
                View →
            </button>
        </div>
    );
};

export default OverviewCard;

