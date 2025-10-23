import express from "express"
import { createFile, createFileBYparentDirId, deleteFileByID, getFiles, updateFilebyID } from "../controllers/fileController.js"
const router = express.Router()
router.get("/:id",getFiles)

router.delete("/:id",deleteFileByID )
router.patch("/:id",updateFilebyID)
router.post("/:parentDirId", createFileBYparentDirId )
router.post("/",createFile )


export default router
