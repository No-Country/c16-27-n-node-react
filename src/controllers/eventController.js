import { validationResult } from 'express-validator';
import eventService from './../services/eventService.js';
import { multerGCSUploader, uploadToGCS } from '../helpers/adapter/MulterAdapter.js';
import mongoose from 'mongoose';
import Event from '../models/event.js';
import userController from './userController.js';

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

const findAllEvents = (req, res) => {
    eventService
        .findAllEvents()
        .then(data => res.status(200).json(data))
        .catch(err => res.status(404).json(err));
};

const findEventById = (req, res) => {

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

const createEvent = async (req, res) => {

    const errors = validationResult(req);
    
    if (errors.isEmpty()) {
        const { creatorUserEmail, title, description, type, category, address, city, date, attendees } = req.body;
        const url = `http://localhost:4000/api/users/email`;
        
        // const formattedDateTimes = `${date} ${time} ${timeZone}`
        try {
            // const searchedUser =await userController.findUserByEmail(creatorUserEmail)
            await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({email:creatorUserEmail})
            })
            .then(response => response.json())
            .then((async (data)=> {

                console.log("usuario encontrado: fromEvent", data);

                const  userReturned = data;
                if( userReturned) {
    
                    const newUser = await eventService.createEvent({
                        creatorUserEmail,
                        title,
                        description,
                        type,
                        category,
                        address,
                        city,
                        date,
                        attendees
                    });

                    
                    res.status(201).json({ errors: errors.array(), data: newUser });
                } else {
                    res.status(404).json({message : "El Usuario que pretende crear el evento no existe en la BD"})
                }
    

            }))

            
        } catch (err) {
            res.status(400).json(err);
        }
    } else {
        res.status(400).json({ errors: errors.array() })
    }
};

const updateEvent = async (req, res) => {

    const errors = validationResult(req);

    if (errors.isEmpty()) {
        const { id } = req.params;
        const event = req.body;
        const specificEvent = await eventService.findEventById(id)

        
        if(specificEvent){ 
            console.log(specificEvent);
            eventService
            .updateEvent(id, event)
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(404).json(err));
        } else {
            res.status(404).json('message: "El Id no existe')
        }
    }
    else {
        res.status(400).json({ errors: errors.array() })
    }
}

const deleteEventById = (req, res) => {

    const { id } = req.params;

    eventService
        .deleteEventById(id)
        .then(data => res.status(204).json(data))
        .catch(err => res.status(404).json(err));
};

const updateImage = async (req, res) => {
    const id = req.params.id;
        if (!id){
            return res.status(400).json({ error: 'No id specified' });
        }

    multerGCSUploader.single('file')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        try {
            const publicUrl = await uploadToGCS(req.file, res);
            //res.status(200).json({ publicUrl });
            const result = await Event.findByIdAndUpdate(id, {image: publicUrl}, {new: true});
            res.status(200).json({result});

        } catch (err) {
            console.error('Error uploading file:', err);
            res.status(500).json({ error: 'Failed to upload file' });
        }
        
        
        
        

    });

};

export default {
    findAllEvents,
    findEventById,
    findEventsByUserId,
    createEvent,
    updateEvent,
    deleteEventById,
    updateImage
};