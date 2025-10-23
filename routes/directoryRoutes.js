
import express from "express"
import { CreateDirectory, createDirectoyByParentDirId, deleteDirectory, gerDirectoryByID, getDirectoy, renameDirecoty } from "../controllers/directoryController.js"
const router = express.Router()
router.get('/',getDirectoy)
router.get('/:id',gerDirectoryByID)
router.post('/', CreateDirectory)
router.post('/:parentDirId', createDirectoyByParentDirId)



router.patch("/:id",renameDirecoty )

router.delete("/:id", deleteDirectory)




export default router;