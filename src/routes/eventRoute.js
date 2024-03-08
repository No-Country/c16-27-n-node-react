import express from "express";
import eventController from "./../controllers/eventController.js";
import { uploadToGCS } from "../helpers/adapter/MulterAdapter.js";

import { body } from "express-validator";
const router = express.Router();

// Enrutadores de los controladores
router.get('/events', eventController.findAllEvents);

router.get('/events/:id', eventController.findEventById);

router.get('/events/user/:id', eventController.findEventsByUserId);

router.delete('/events/:id', eventController.deleteEventById);

router.post('/events', [
    body('creatorUserEmail', "Ingrese un nombre del creador del evento")
        .exists()
        .isEmail()
        .isLength({ min: 5 }),
    body('title', 'Ingrese un titulo para el evento')
        .exists()
        .isLength({ min: 5, max: 75 }),
    body('description', 'Ingrese una descripción válida para el evento')
        .exists()
        .isLength({ min: 0, max: 2000 }),
    body('type', 'Ingrese un tipo de evento válido')
        .isIn(['online', 'inPerson'])
        .isLength({ min: 6, max: 8 }),
    body('category', 'Ingrese un tipo de categoría válido')
        .exists()
        .isInt({ min: 1, max: 20 }),
    body('address', 'Ingrese una dirección válida')
        .exists()
        .isLength({ min: 5, max: 100 }),
    body('date', 'Ingrese una fecha válida')
        .exists()
        .isLength({ min: 6, max: 40 }),
    body('city','Ingrese un campo de ciudad válido')
        .optional()
        .isLength({ min: 0, max: 250 }),    

], eventController.createEvent);

router.put('/events/:id', [    
    body('title', 'Ingrese un titulo para el evento')
        .optional()
        .isLength({ min: 5, max: 50 }),
    body('description', 'Ingrese una descripción válida para el evento')
        .optional()
        .isLength({ min: 10, max: 2500 }),    
    body('category', 'Ingrese un tipo de categoría válido')
        .optional()
        .isInt({ min: 1, max: 20 }),
    body('address', 'Ingrese una dirección válida')
        .optional()
        .isLength({ min: 10, max: 100 }),
    body('date', 'Ingrese una fecha válida')
        .optional()
        .isLength({ min: 6, max: 40 }),
    body('attendees', 'Ingrese al menos 1 asistente para el evento')
        .optional()
], eventController.updateEvent);

router.post('/events/aa', async ( req, res, next) => {
    const file = req.file;
    const imageUrl = await uploadToGCS(file)
    console.log(imageUrl)
});

router.post('/events/updateImage/:id', eventController.updateImage);


export default router;


