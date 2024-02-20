import express from "express";
import eventSchema from "./../models/event.js";

const router = express.Router();


router.get('/events', (req,res) => {

    eventSchema
        .find()
        .then(data => res.json(data))
        .catch(err => res.json(err));

    // res.send(`Hello desee ${req.baseUrl}`);
});

// Endpoint Get Event By Id
router.get('/events/:id', (req, res) => {
    const {id} = req.params;

    eventSchema
        .findById(id)
        .then(data => res.json(data))
        .catch(err => res.json(err));

})

// Endpoint Create
router.post('/events', (req,res) => {

    const body = req.body;

    const event =  eventSchema(body);

    event
        .save()
        .then(data => res.json(data))
        .catch(err => res.json(err));

});

// Endpoint Delete
router.delete('/events/:id', (req, res) => {

    const {id} = req.params;

    eventSchema
        .deleteOne({_id : id})
        .then(data => res.json(data))
        .catch(err => res.json(err));
})


export default router;


