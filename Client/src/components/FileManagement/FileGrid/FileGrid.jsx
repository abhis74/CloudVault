import React, { useState } from 'react';
import FileCard from '../FileCard/FileCard';
import './FileGrid.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { addDirectory } from '../../../store/slices/directoriesSlice';

// import {
//   useFetchDirectoryQuery,
//   useCreateDirectoryMutation,
//   useDeleteDirectoryMutation,
//   useRenameDirectoryMutation,
// } from '../../../store/slices/directoriesSlice'
import { useGetUsersQuery } from '../../../store/slices/UserSlice';
import { useFetchDirectoryQuery } from '../../../store/slices/directoriesSlice';
const FileGrid = () => {
    const {id} = useParams()
    const { data, isLoading } = useFetchDirectoryQuery(id);
    // const directories = useSelector((state)=>state.directoriesSlice.directoryData);
    
    const dispatch = useDispatch();
      const [name, setName] = useState("")
      const [email, setEmail] = useState("")
      const [fileslist, setfileslist] = useState([])
     const [directorieslist, setDirectorieslist] = useState([])

    // const directories = useSelector((state) => state.directories.directoriesList);
//     const { data, error, isLoading } = useFetchDirectoryQuery(id?id:''); // directoryId is the id you want to fetch
// const [createDirectory] = useCreateDirectoryMutation();
// const [deleteDirectory] = useDeleteDirectoryMutation();
// const [renameDirectory] = useRenameDirectoryMutation();
// const [Userresponse] = useGetUsersQuery()
    const BASE_URL = "http://localhost:3000/"
    
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
    //   dispatch(addDirectory(data.directories))
      setfileslist(data.files);
  }
  useEffect(() => {
   fetchData()
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
