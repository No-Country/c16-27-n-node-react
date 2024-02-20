import express from "express";
import eventController from "./../controllers/eventController.js";

const router = express.Router();

// Enrutadores de los controladores
router.get('/events', eventController.find);
router.get('/events/:id', eventController.findById);
router.post('/events/', eventController.save);
router.delete('/events/:id', eventController.deleteOne);


export default router;


