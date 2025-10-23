import { createWriteStream } from "fs"
import { rm } from "fs/promises"
import path from "path"
import File from "../models/fileModel.js"
import Directory from "../models/directoryModel.js" 

export const getFiles = async (req, res) => {
    const { id } = req.params
    const user = req.user
    const filedata = await File.findOne({_id: id,userID:user._id}).lean()
    if (!filedata) {
        return res.status(404).json({ message: "File not found" })
    }
    const filePath = path.join(process.cwd(), "storage", `${id}${filedata.extension}`)
    if (req.query.action === "download") {
        return res.download(filePath, filedata.name)
    }

    try {

        return res.status(200).sendFile(`${process.cwd()}/storage/${id}${filedata.extension}`)
    } catch (err) {
        if (err) {
            return res.status(404).json({ message: "File not Found!" })
        }
    }
}

export const deleteFileByID = async (req, res) => {
    
    const { id } = req.params
    const user =req.user
    const filedata = await File.findOne({ _id:id,userID:user._id} )
    const filepath = `${process.cwd()}/storage/${id}${filedata.extension}`
    if(!filedata){
        res.status(404).json({message:"File not found"})
    }
    try {
        await rm(filepath)
        await File.deleteOne({ _id: filedata._id})
        return res.status(200).json({ message: "File deleted" })
    }
    catch (err) {
        return res.status(500).json({ message: "Could not delete file" })
    }

}

export const updateFilebyID=  async (req, res) => {
    const { id } = req.params

    try {
        const filedata = await File.updateOne({ _id: id}, {$set: { name: req.body.fileName }})
        res.status(200).json({ message: "file name updated" })

    } catch (err) {
        return res.status(500).json({ message: "Could not save file name" })
    }
   
}

export const createFileBYparentDirId = async (req, res) => {
    const user = req.user
    const parentDirId = req.params.parentDirId
    console.log(parentDirId, "parentDirId")
    const filename = req.headers.filename
    const extension = path.extname(filename)
    const parentDirData = await Directory.findOne({ _id: parentDirId, userID: user._id })

    if (!parentDirData) {
        return res.status(404).json({ error: "Parent Directory not found" })
    }
    const savedfile = await File.insertOne({
        extension,
        name: filename,
        parentDirId: parentDirData._id,
        userID:user._id
    })
    console.log(savedfile,"savedfile")
    const fullFileName = `${savedfile._id.toString()}${extension}`
    const writeStream = createWriteStream(`./storage/${fullFileName}`)

    req.pipe(writeStream)
    req.on("end", async () => {
        res.status(201).json("File Uploaded")
    })
    req.on("error", async()=>{
        await db.collection('files').deleteOne({_id:savedfile.insertedId})
        res.status(404).json({message:"File Could not uploaded"})
    })
}

export const createFile = async (req, res) => {
    const user = req.user
    const parentDirId = user.rootDirId
    const filename = req.headers.filename
    const extension = path.extname(filename)
    const parentDirData = await Directory.findOne({ _id: parentDirId, userID: user._id })
    
    if (!parentDirData) {
        return res.status(404).json({ error: "Parent Directory not found" })
    }
    const savedfile = await File.insertOne({
            extension,
            name: filename,
            parentDirId:parentDirData._id,
            userID: user._id
    })
    const fullFileName = `${savedfile._id.toString()}${extension}`
    const writeStream = createWriteStream(`./storage/${fullFileName}`)
  
    req.pipe(writeStream)
    req.on("end", async () => {
        res.status(201).json("File Uploaded")
    })
    req.on("error", async () => {
        await File.deleteOne({ _id: savedfile._id })
        res.status(404).json({ message: "File Could not uploaded" })
    })
}