import express from "express";
import eventSchema from "../models/event.js";
// const eventSchema = require('./../models/event');

const router = express.Router();


router.get('/events', (req,res) => {

    eventSchema
        .find()
        .then(data => res.json(data))
        .catch(err => res.json(err));

    // res.send(`Hello desee ${req.baseUrl}`);
})

router.post('/events', (req,res) => {

    const {body} = req.body;

    const event =  eventSchema(body);

    event
        .save()
        .then(data => res.json(data))
        .catch(err => res.json(err));

    eventSchema.save(body)
})


export default router;


