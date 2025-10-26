import React from 'react';
import FileCard from '../FileCard/FileCard';
import './FileGrid.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { use } from 'react';
import { useSelector } from 'react-redux';

const FileGrid = () => {
    const directories = useSelector((state) => state.directories.directoriesList);
    console.log(directories,"directories from store");
    const BASE_URL = "http://localhost:3000/"
    const {id}= useParams()
    const nevigate = useNavigate()
 async function  fetchData() {
 const response=  await fetch(`${BASE_URL}directory/${id? id : ""}`,{
  credentials: "include",
 })
  const Userresponse=  await fetch(`${BASE_URL}user/`,{
  credentials: "include",
  method: "GET",
 })
 const userData = await Userresponse.json()
 if(Userresponse.status === 401){
  nevigate("/login")
  return}
  setName(userData.name)
  setEmail(userData.email)
  const data  = await response.json()
      if(response.status === 401){
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

    // Mock data - replace with actual data from API
    const files = [
        {
            id: 1,
            name: 'Diwali 2025',
            type: 'folder',
            size: '1.66KB',
            modifiedDate: '17 Oct, 2025',
            owner: 'You',
            lastOpened: '35 mins ago'
        },
        {
            id: 2,
            name: 'Wedding',
            type: 'video',
            size: '2.3GB',
            modifiedDate: '15 Oct, 2025',
            owner: 'You',
            lastOpened: '1 hour ago'
        },
        {
            id: 3,
            name: 'Diwali 2025',
            type: 'folder',
            size: '1.66KB',
            modifiedDate: '17 Oct, 2025',
            owner: 'You',
            lastOpened: '35 mins ago'
        },
        {
            id: 4,
            name: 'Diwali 2025',
            type: 'folder',
            size: '1.66KB',
            modifiedDate: '17 Oct, 2025',
            owner: 'You',
            lastOpened: '35 mins ago'
        }
    ];

    return (
        <div className="file-grid">
            {files.map((file) => (
                <FileCard key={file.id} file={file} />
            ))}
        </div>
    );
};

export default FileGrid;
