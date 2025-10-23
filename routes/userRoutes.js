import express from 'express';
import checkAuth from '../auth.js'; 
import { createUser, getUserDetails, loginUser, logoutUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/',createUser )

router.post('/login', loginUser)

router.get("/", checkAuth, getUserDetails)

router.post("/logout", logoutUser)

export default router;