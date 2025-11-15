import React from 'react';
import './WelcomeSection.css';
import { useGetUsersQuery } from '../../../store/slices/UserSlice';

const WelcomeSection = () => {
 const { data, error, isLoading } = useGetUsersQuery();
    return (
        <div className="welcome-section">
            <h1 className="welcome-section_title">Welcome {data?.name}!</h1>
        </div>
    );
};

export default WelcomeSection;
