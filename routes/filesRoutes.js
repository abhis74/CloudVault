import express from "express"
// import multer from "multer"
import { createFile, createFileBYparentDirId, deleteFileByID, getFiles, updateFilebyID } from "../controllers/fileController.js"
import checkAuth from "../auth.js"
// const upload = multer({ dest: './storage/' });
const router = express.Router()
router.get("/:id",getFiles)

router.delete("/:id",checkAuth,deleteFileByID )
router.patch("/:id",checkAuth,updateFilebyID)
router.post("/:parentDirId", checkAuth ,createFileBYparentDirId )
router.post("/",checkAuth, createFile )


export default router
