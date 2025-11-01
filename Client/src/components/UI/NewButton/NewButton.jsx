import React, { useState } from 'react';
import PlusIcon from '../../../assets/icons/plus.svg?react';
import Modal from '../UploadModal/Modal';
import './NewButton.css';

const NewButton = () => {
   const [isOpen, setIsOpen]= useState(false);

    const handleNewClick = () => {
        // Handle new file/folder creation
        console.log('New button clicked');
        setIsOpen(true);
    };

    return (
        <>
        <button className="new-button" onClick={handleNewClick}>
            <PlusIcon className="new-button__icon" />
            <span className="new-button__text">New</span>
        </button>
        {isOpen&&<Modal  setIsOpen ={setIsOpen}/>}
        </>
    );
};

export default NewButton;
