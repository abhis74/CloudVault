import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import './Modal.css';
import { useNavigate, useParams } from "react-router-dom";

const Modal = ({setIsOpen}) => {
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
    const [directorieslist, setDirectorieslist] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [fileslist, setfileslist] = useState([])
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const dropRef = useRef(null);
   const [progress , setProgress] = useState(0)
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
    }, [id])

  // --- Handle Drag & Drop ---
  const handleDragOver = (e) => {
    e.preventDefault();
    dropRef.current.classList.add("highlight");
  };

  const handleDragLeave = () => {
    dropRef.current.classList.remove("highlight");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    dropRef.current.classList.remove("highlight");
    const file = e.dataTransfer.files[0]
    const xhr = new XMLHttpRequest()
    xhr.open("POST", `${BASE_URL}files/${id || ""}`, true)
    console.log(file.name)
    xhr.setRequestHeader("filename", file.name)
    xhr.addEventListener('load', (e) => {
        e.preventDefault()
        fetchData()
        setIsOpen(false);
        
    })
    xhr.withCredentials = true
    xhr.upload.addEventListener('progress', (e) => {
        e.preventDefault()
        console.log((e.loaded / e.total * 100) + "% uploaded");
        setProgress((e.loaded / e.total * 100) + "% uploaded");
    })
    xhr.send(file)
  
  };

  // --- Handle File Input ---
  const handleFileChange = (e) => {
      e.preventDefault()
    const file = e.target.files[0]
    console.log(file);
    const xhr = new XMLHttpRequest()
    // xhr.open("POST", BASE_URL, true)
    // xhr.open("POST", `${BASE_URL}file${dirPath}/${file.name}`, true)
    xhr.open("POST", `${BASE_URL}files/${id || ""}`, true)
    xhr.setRequestHeader("filename", file.name)
    xhr.addEventListener('load', (e) => {
        e.preventDefault()
        console.log("File uploaded successfully")
        console.log(e);
        console.log(xhr.responseText);
        fetchData()
        setIsOpen(false);
    })
    xhr.withCredentials = true
    xhr.upload.addEventListener('progress', (e) => {
        e.preventDefault()
        console.log((e.loaded / e.total * 100) + "% uploaded");
        setProgress((e.loaded / e.total * 100) + "% uploaded");
    })
    xhr.send(file)
  };

  // --- Handle Folder Popup ---
  const   handleCreateFolder = async (e) => {
    if (newFolderName.trim() !== "") {
    e.preventDefault()
    const response = await fetch(`${BASE_URL}directory/${id || ""}`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        dirname: newFolderName,
      },
      credentials: "include"
      // body: JSON.stringify({directoryName}),
    })
    console.log(response,"response");
    await response.json({message:"dicrectory created"})
    fetchData()
      setNewFolderName("");
      setIsOpen(false);
    }
  };

  return (
    createPortal(   
<div className="modalContainer">
  <div className="close" onClick={()=>{setIsOpen(false)}}>X</div>
     <div className="file-manager-container">
        <h2>📁 File Upload & Folder Manager</h2>
      <div
        ref={dropRef}
        className="drop-zone"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Drag and drop files here</p>
        <p>or</p>
        <label style={{ color: "#007bff", cursor: "pointer" }}>
          Click to upload
          <input
            type="file"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>
      </div>
      {files.length > 0 && (
        <>
          <h3 style={{ marginTop: "20px" }}>Uploaded Files:</h3>
          <ul className="file-list">
            {files.map((file, index) => (
              <li key={index}>📄 {file.name}</li>
            ))}
          </ul>
        </>
      )}

      {/* Folders */}
      <button
        className="create-folder-btn"
        onClick={() => setIsPopupOpen(true)}
      >
        ➕ Create Folder
      </button>

      {folders.length > 0 && (
        <>
          <h3 style={{ marginTop: "15px" }}>Folders:</h3>
          <ul className="folder-list">
            {folders.map((folder, index) => (
              <li key={index}>📁 {folder}</li>
            ))}
          </ul>
        </>
      )}

      {/* Folder Popup */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Create New Folder</h3>
            <input
              type="text"
              placeholder="Enter folder name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
            />
            <div style={{ textAlign: "right" }}>
              <button
                className="cancel-btn"
                onClick={() => setIsPopupOpen(false)}
              >
                Cancel
              </button>
              <button className="create-btn" onClick={handleCreateFolder}>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
</div>
    
    ,document.getElementById("portal"))
)
};

export default Modal;
