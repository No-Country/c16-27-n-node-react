import { validationResult } from 'express-validator';
import eventService from './../services/eventService.js';

// const newEvent = new Event({
//     title: 'Tech Conference',
//     description: 'A conference for tech enthusiasts',
//     image: 'https://example.com/event.jpg',
//     date: new Date('2024-06-01'),
//     type: 'in-person',
//     maxAttendees: 500,
//     location: 'New York City',
//     createdBy: newUser._id,
//     participants: []
//   });

const findAllEvents = (req,res) => {
    eventService
        .findAllEvents()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err));
};

const findEventById = (req,res) => {

    const { id } = req.params;

    eventService
        .findEventById(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err));
    };
    
const findEventsByUserId = (req, res) => {
    const { id } = req.params;
        
    eventService
        .findEventsByUserId(id)
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err));
}

const createEvent = (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){
        const body = req.body;
    
        eventService
            .createEvent(body)
            .then(data => res.status(201).json({errors: errors.array(), data : data}))
            .catch(err => res.status(400).json(err));
    } else {
        res.status(400).json({ errors: errors.array()})
    }

};

const updateEvent = (req,res) => {

    const errors = validationResult(req);

    if(errors.isEmpty()){

        const { id } = req.params;
        const event = req.body;
        
        eventService
        .updateEvent(id, event)
        .then((data) => res.status(200).json(data))
        .catch((err) => res.status(404).json(err));
    }
    else {
        res.status(400).json({errors: errors.array()})
    }
}

const deleteEventById = (req,res) => {
    
    const { id } = req.params;
    
    eventService
        .deleteEventById(id)
        .then(data => res.status(204).json(data))
        .catch(err => res.status(404).json(err));
};

export default {
    findAllEvents,
    findEventById,
    findEventsByUserId,
    createEvent,
    updateEvent,
    deleteEventById,
};
