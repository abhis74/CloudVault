import React from 'react';
import './ActivityFeed.css';

const ActivityFeed = ({ title = "Today", activities = [] }) => {
    const getActivityIcon = (type) => {
        switch (type) {
            case 'upload':
                return '↑';
            case 'edit':
                return '✏️';
            case 'share':
                return '🔗';
            default:
                return '•';
        }
    };

    return (
        <div className="activity-feed">
            <h2 className="activity-feed_title">{title}</h2>
            <div className="activity-feed_items">
                {activities.map((activity, index) => (
                    <div key={index} className="activity-feed_item">
                        <div className="activity-feed_icon">
                            {getActivityIcon(activity.type)}
                        </div>
                        <div className="activity-feed_content">
                            <div className="activity-feed_action">
                                <span className="activity-feed_action-text">{activity.action}</span>
                                <span className="activity-feed_time">{activity.timeAgo}</span>
                            </div>
                            <div className="activity-feed_details">{activity.details}</div>
                            <div className="activity-feed_timestamp">{activity.timestamp}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActivityFeed;

