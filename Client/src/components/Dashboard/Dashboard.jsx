import React from 'react';
import OverviewCard from './OverviewCard/OverviewCard';
import CategoryCard from './CategoryCard/CategoryCard';
import SharedFilesList from './SharedFilesList/SharedFilesList';
import StorageBreakdown from './StorageBreakdown/StorageBreakdown';
import ActivityFeed from './ActivityFeed/ActivityFeed';
import FolderIcon from '../../assets/icons/folder.svg?react';
import VideoIcon from '../../assets/icons/video.svg?react';
import TrashIcon from '../../assets/icons/trash.svg?react';
import './Dashboard.css';

// Simple icon components for categories
const DocumentIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
        <path d="M14 2v6h6" />
    </svg>
);

const AudioIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
    </svg>
);

const ImageIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
    </svg>
);

const Dashboard = () => {
    // Mock data - replace with actual API data
    const overviewData = [
        {
            title: 'Files',
            icon: DocumentIcon,
            count: '440 Files',
            used: 2,
            total: 15,
            color: 'orange'
        },
        {
            title: 'Folders',
            icon: FolderIcon,
            count: '440 Files',
            used: 2,
            total: 15,
            color: 'green'
        },
        {
            title: 'Trash',
            icon: TrashIcon,
            count: '440 Files',
            used: 2,
            total: 15,
            color: 'pink'
        }
    ];

    const categoryData = [
        {
            title: 'Documents',
            icon: DocumentIcon,
            count: '440 Files',
            used: 1,
            total: 15,
            color: 'pink'
        },
        {
            title: 'Audios',
            icon: AudioIcon,
            count: '440 Files',
            used: 2,
            total: 15,
            color: 'blue'
        },
        {
            title: 'Images',
            icon: ImageIcon,
            count: '440 Files',
            used: 4,
            total: 15,
            color: 'orange'
        },
        {
            title: 'Videos',
            icon: VideoIcon,
            count: '440 Files',
            used: 5,
            total: 15,
            color: 'green'
        }
    ];

    const sharedFiles = [
        { name: 'Project COS', date: 'Aug 09, 2013', members: 8 },
        { name: 'Project COS', date: 'Aug 09, 2013', members: 8 },
        { name: 'Project COS', date: 'Aug 09, 2013', members: 8 },
        { name: 'Project COS', date: 'Aug 09, 2013', members: 8 },
        { name: 'Project COS', date: 'Aug 09, 2013', members: 8 }
    ];

    const storageBreakdown = [
        { name: 'Documents', size: 1, count: 1254, color: 'pink' },
        { name: 'Audios', size: 2, count: 50, color: 'blue' },
        { name: 'Images', size: 4, count: 120, color: 'green' },
        { name: 'Videos', size: 5, count: 40, color: 'orange' }
    ];

    const activities = [
        {
            type: 'upload',
            action: 'Uploaded',
            details: "Uploaded 'Wedding Video' to Wedding > Ceremony",
            timeAgo: 'Just now',
            timestamp: 'Aug 09, 2013, 10:09 PM'
        },
        {
            type: 'edit',
            action: 'Edited',
            details: "Edited 'Product FAQs.pdf' in Docs > Interior Design",
            timeAgo: '8 minutes ago',
            timestamp: 'Sep 18, 2023, 08:55 AM'
        },
        {
            type: 'share',
            action: 'Shared',
            details: "Shared 'Product FAQs.pdf' in Calls >",
            timeAgo: '2 hours ago',
            timestamp: ''
        }
    ];

    return (
        <div className="dashboard">
            <div className="dashboard_overview">
                {overviewData.map((item, index) => (
                    <OverviewCard
                        key={index}
                        title={item.title}
                        icon={item.icon}
                        count={item.count}
                        used={item.used}
                        total={item.total}
                        color={item.color}
                        onView={() => console.log(`View ${item.title}`)}
                    />
                ))}
            </div>

            <div className="dashboard_content">
                <div className="dashboard_left">
                    <div className="dashboard_categories">
                        {categoryData.map((item, index) => (
                            <CategoryCard
                                key={index}
                                title={item.title}
                                icon={item.icon}
                                count={item.count}
                                used={item.used}
                                total={item.total}
                                color={item.color}
                                onView={() => console.log(`View ${item.title}`)}
                            />
                        ))}
                    </div>
                    <SharedFilesList items={sharedFiles} />
                </div>

                <div className="dashboard_right">
                    <StorageBreakdown
                        total={15}
                        used={12.8}
                        breakdown={storageBreakdown}
                    />
                    <ActivityFeed title="Today" activities={activities} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;

