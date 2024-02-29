import express from "express";
import {saveUserSession} from "../controllers/userController.js";


const router = express.Router();

router.post('/user', saveUserSession)


export default router;