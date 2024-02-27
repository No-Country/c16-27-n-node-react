import express from "express";
import eventController from "./../controllers/eventController.js";
import { uploadToGCS } from "../helpers/adapter/MulterAdapter.js";

const router = express.Router();

// Enrutadores de los controladores
router.get('/events', eventController.find);
router.get('/events/:id', eventController.findById);
router.post('/events/', eventController.save);
router.delete('/events/:id', eventController.deleteOne);



router.post('/events/updateImage', eventController.updateImage);
router.post('/events/aa', async ( req, res, next) => {
    const file = req.file;
    const imageUrl = await uploadToGCS(file)
    console.log(imageUrl)
});


export default router;


