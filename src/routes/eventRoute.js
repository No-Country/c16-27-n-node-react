import express from "express";
import eventController from "./../controllers/eventController.js";

const router = express.Router();

// Enrutadores de los controladores
router.get('/events', eventController.findAllEvents);
router.get('/events/:id', eventController.findEventById);
router.get('/events/user/:id', eventController.findEventsByUserId);
router.post('/events/', eventController.createEvent);
router.put('/events/:id', eventController.updateEvent);
router.delete('/events/:id', eventController.deleteEventById);


export default router;


