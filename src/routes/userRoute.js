import express from "express";
import userController from "../controllers/userController.js";
const router = express.Router();

router.get("/users", userController.find);

router.get("/users/:id", userController.findId);

router.post("/users", userController.save);

router.put("/users/:id", userController.edit);

router.delete("/users/:id", userController.deleteById);

export default router;
