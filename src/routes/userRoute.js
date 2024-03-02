import express from "express";
import userController from "../controllers/userController.js";
import { body } from 'express-validator';

const router = express.Router();

// router.get("/users", userController.find);

// router.get("/users/:id", userController.findId);

// router.post("/users", userController.save);

// router.put("/users/:id", userController.edit);

// router.delete("/users/:id", userController.deleteById);


router.post('/users/email', [
    body('email', 'el dato ingresado no es un  email.')
        .isEmail()
    ], userController.findUserByEmail);

router.post('/users/attendEvent/:eventId', [
    body('email', 'el dato ingresado no es un  email')
        .isEmail()
    ], userController.attendEvent);

router.post('/users', userController.saveUserSession)


export default router;

