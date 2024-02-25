import express from "express";
import eventController from "./../controllers/eventController.js";

const router = express.Router();

// Enrutadores de los controladores
router.get('/events', eventController.findAllEvents);
router.get('/events/:id', eventController.findEventById);
router.post('/events/', eventController.createEvent);
router.delete('/events/:id', eventController.deleteEventById);


export default router;


