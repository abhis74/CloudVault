import { useEffect, useState } from 'react'
import './App.css'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function DirectoryView() {
  const BASE_URL = "http://localhost:3000/"
  const [directorieslist, setDirectorieslist] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [fileslist, setfileslist] = useState([])
  const [fileName, setFileName] = useState("")
  const [progress , setProgress] = useState(0)
  const [directoryName, setDirectoryName] = useState("")
  const nevigate = useNavigate()
  // const dirPath= useParams()
  const {id}= useParams()
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

  async function handleChange(e){
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
    })
    xhr.withCredentials = true
    xhr.upload.addEventListener('progress', (e) => {
        e.preventDefault()
        console.log((e.loaded / e.total * 100) + "% uploaded");
        setProgress((e.loaded / e.total * 100) + "% uploaded");
    })
    xhr.send(file)
  }

  async function handleDelete(id){
    console.log(id);

    const response = await fetch(`${BASE_URL}files/${id}`,{
      method: "DELETE",
       credentials: "include"
    })
    const data = await response.text()
    fetchData()
  }
  async function handleDeleteDir(id){
    console.log(id);

    const response = await fetch(`${BASE_URL}directory/${id}`,{
      method: "DELETE",
       credentials: "include"
    })
    const data = await response.text()
    fetchData()


  }
  async function handleRename(e){
    setFileName(e.target.value)
  }
  async function renamefile(oldFileName,filename){
    console.log(oldFileName);
    console.log(filename);
    setFileName(oldFileName)
    // const response = await fetch("http://localhost:3000/rename",{
    //   method: "POST",
    //   body: filename,
    // })
    // const data = await response.text()
    // fetchData()
  }
  async function sveFilename(id){
    console.log(id);
    console.log(fileName,'...............................');
    // const response = await fetch(BASE_URL,{
    //   method: "PATCH",
    //   body: JSON.stringify({oldFileName, fileName}),
    // })
    const response = await fetch(`${BASE_URL}files/${id}`,{
      method: "PATCH",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({fileName}),
       credentials: "include"
    })
    const data = await response.text()
    fetchData()
    setFileName("")
    
  }
   async function sveDirname(id){
    console.log(id);
    console.log(fileName,'...............................');
    // const response = await fetch(BASE_URL,{
    //   method: "PATCH",
    //   body: JSON.stringify({oldFileName, fileName}),
    // })
    const response = await fetch(`${BASE_URL}directory/${id}`,{
      method: "PATCH",
      headers:{
        "Content-Type":"application/json"
      },
       credentials: "include",
      body: JSON.stringify({"DirName":fileName}),
    })
    const data = await response.text()
    fetchData()
    setFileName("")
    
  }
  async function handleCreateDirectory(e){
    e.preventDefault()
    console.log("hiiiii")
    const response = await fetch(`${BASE_URL}directory/${id || ""}`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        dirname: directoryName,
      },
      credentials: "include"
      // body: JSON.stringify({directoryName}),
    })
    console.log(response,"response");
    console.log(directoryName,"directoryName");
    await response.json({message:"dicrectory created"})
    setDirectoryName("")
    fetchData()
  }
  async function logoutHandle(){
    const response = await fetch(`${BASE_URL}user/logout`,{
      method: "POST",
      credentials: "include"
    })
    nevigate("/login")
    console.log(response);
  }
  return (
    <>
      <h1>My files</h1> 
      <div className='nav' style={{display:"flex", gap:"20px",flexDirection: "column-reverse"}}>
      <Link to={"/register"}>Register</Link>
      <Link to={"/login"}>Login</Link>
        <div className="userProfile" style={{display:"flex", gap:"20px",flexDirection: "column-reverse"}}>
          <span>{name}  </span> 
          <span>{email}</span>
          <span onClick={logoutHandle}>Logout</span>

        </div>
      </div>
        <input type="file"  onChange={handleChange}/>
      <input type="text"  onChange={handleRename} value={fileName}/>
      <div>{progress}</div>
      <form action="" method="post" onSubmit={handleCreateDirectory}>
        <input type="text" name="directory" id="directory" onChange={(e)=>{setDirectoryName(e.target.value)}}/>
        <button type="submit">Create Directory</button>
      </form>
      <div className="directory">
        {directorieslist?.map((item, index) => (
    
          <div key={item?._id} className="directory">
            <Link to={`/directory/${item?._id}`}>{item?.name}</Link>
               <button onClick={()=>{handleDeleteDir(item?._id)}} >Delete</button>
            <button onClick={()=>renamefile(item?.name )}>Rename</button>
            <button onClick={()=>{sveDirname(item?._id )}} >Save File name</button>
            {/* 
            <a href={`${BASE_URL}directory/${dirPath}/${item.name}`}>{item.name}</a> */}
          </div>
        ))}
      </div>
        {fileslist?.map((item, index) => (
          <div key={item._id} className="file">
          <span>{item.name}</span>
           {/* <a href={`${BASE_URL}files/${dirPath}/${item.name}?action=open`}>Open</a> 
           <a href={`${BASE_URL}files/${dirPath}/${item.name}?action=download`}>Download</a> */}
           <a href={`${BASE_URL}files/${item._id}`}>Open</a> 
           <a href={`${BASE_URL}files/${item._id}?action=download`}>Download</a>
          <button onClick={()=>{handleDelete(item._id)}} >Delete</button>
          <button onClick={()=>renamefile(item.name )}>Rename</button>
          <button onClick={()=>{sveFilename(item._id )}} >Save File name</button>
          </div>
      ))}
    </>
  )
}

export default DirectoryView
