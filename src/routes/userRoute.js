import express from "express";
import userController from "../controllers/userController.js";
import { body } from 'express-validator';

const router = express.Router();

router.get("/user", userController.find);

router.get("/user/:id", userController.findId);

router.post("/user", userController.save);

router.put("/user/:id", userController.edit);

router.delete("/user/:id", userController.deleteById);


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

