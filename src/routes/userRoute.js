import express from "express";
import {saveUserSession} from "../controllers/userController.js";

const router = express.Router();

// router.get("/users", userController.find);

// router.get("/users/:id", userController.findId);

// router.post("/users", userController.save);

// router.put("/users/:id", userController.edit);

// router.delete("/users/:id", userController.deleteById);




router.post('/user', saveUserSession)


export default router;

