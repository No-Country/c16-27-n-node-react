import { validationResult } from 'express-validator';
import eventService from './../services/eventService.js';
import { multerGCSUploader, uploadToGCS } from '../helpers/adapter/MulterAdapter.js';

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
        const { creatorUserId, title, description, type, category, address, city, date, time, timeZone, attendees } = req.body;
        
        const formattedDateTimes = `${date} ${time} ${timeZone}`
        
        try {
            const data = await eventService.createEvent({
                creatorUserId,
                title,
                description,
                type,
                category,
                address,
                city,
                date: formattedDateTimes,
                attendees
            });
            
            res.status(201).json({ errors: errors.array(), data: data });
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
        const specificEvent = await eventService
        const { id } = req.params;
        const event = req.body;

        eventService
            .updateEvent(id, event)
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(404).json(err));
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

const updateImage = (req, res) => {
        
    multerGCSUploader.single('file')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        try {
            const publicUrl = await uploadToGCS(req.file, res);
            res.status(200).json({ publicUrl });
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