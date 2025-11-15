import React, { useState } from 'react';
import FileCard from '../FileCard/FileCard';
import './FileGrid.css';
import { useParams } from 'react-router-dom';
import { useFetchDirectoryQuery } from '../../../store/slices/directoriesSlice';
const FileGrid = () => {
    const {id} = useParams()
    const { data, isLoading } = useFetchDirectoryQuery(id);

    return (
        <div className="file-grid">
            {data?.directories.map((directory,index) => (
                <FileCard key={directory.id} file={directory}/>
            ))}
            {data?.files.map((file) => (
                <FileCard key={file.id} file={file} />
            ))}
        </div>
    );
};

export default FileGrid;
