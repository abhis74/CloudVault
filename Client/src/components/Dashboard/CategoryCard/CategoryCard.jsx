import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ title, icon: Icon, count, used, total, color, onView }) => {
    const percentage = (used / total) * 100;

    return (
        <div className={`category-card category-card--${color}`}>
            <div className="category-card_header">
                <h3 className="category-card_title">{title}</h3>
                {Icon && <Icon className="category-card_icon" />}
            </div>
            <div className="category-card_count">{count}</div>
            <div className="category-card_progress">
                <div className="category-card_progress-bar">
                    <div
                        className="category-card_progress-fill"
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
                <div className="category-card_progress-text">
                    <span>{used} GB / {total} GB</span>
                </div>
            </div>
            <button className="category-card_button" onClick={onView}>
                View →
            </button>
        </div>
    );
};

export default CategoryCard;

