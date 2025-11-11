import React, { useState } from 'react';
import FileCard from '../FileCard/FileCard';
import './FileGrid.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
    useFetchDirectoryQuery,
    useCreateDirectoryMutation,
    useDeleteDirectoryMutation,
    useRenameDirectoryMutation,
} from '../../../store/slices/directories'
import { useGetUsersQuery } from '../../../store/slices/UserSlice';
const FileGrid = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [fileslist, setfileslist] = useState([])
    const [directorieslist, setDirectorieslist] = useState([])

    const BASE_URL = "http://localhost:3000/"
    const { id } = useParams()
    const nevigate = useNavigate()

    // const directories = useSelector((state) => state.directories.directoriesList);
    // const { data, error, isLoading } = useFetchDirectoryQuery(id?id:''); // directoryId is the id you want to fetch
    // const [createDirectory] = useCreateDirectoryMutation();
    // const [deleteDirectory] = useDeleteDirectoryMutation();
    // const [renameDirectory] = useRenameDirectoryMutation();
    // const [Userresponse] = useGetUsersQuery()
    async function fetchData() {
        const response = await fetch(`${BASE_URL}directory/${id ? id : ""}`, {
            credentials: "include",
        })
        const Userresponse = await fetch(`${BASE_URL}user/`, {
            credentials: "include",
            method: "GET",
        })
        const userData = await Userresponse.json()
        if (Userresponse.status === 401) {
            nevigate("/login")
            return
        }
        setName(userData.name)
        setEmail(userData.email)
        const data = await response.json()
        if (response.status === 401) {
            nevigate("/login")
            return
        }
        setDirectorieslist(data.directories);
        setfileslist(data.files);
    }
    useEffect(() => {
        fetchData()
        console.log(id);
    }, [id])

    return (
        <div className="file-grid">
            {directorieslist.map((directory) => (
                <FileCard key={directory._id || directory.id} file={directory} />
            ))}
            {fileslist.map((file) => (
                <FileCard key={file._id || file.id} file={file} />
            ))}
        </div>
    );
};

export default FileGrid;
