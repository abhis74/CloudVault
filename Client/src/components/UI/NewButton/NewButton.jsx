import React from 'react';
import PlusIcon from '../../../assets/icons/plus.svg?react';
import './NewButton.css';

const NewButton = () => {
    const handleNewClick = () => {
        // Handle new file/folder creation
        console.log('New button clicked');
    };

    return (
        <button className="new-button" onClick={handleNewClick}>
            <PlusIcon className="new-button__icon" />
            <span className="new-button__text">New</span>
        </button>
    );
};

export default NewButton;
