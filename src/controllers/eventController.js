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
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

const findEventById = (req,res) => {

    const { id } = req.params;

    eventService
        .findEventById(id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

const createEvent = (req,res) => {

    const body = req.body;

    eventService
        .createEvent(body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

const deleteEventById = (req,res) => {
    
    const { id } = req.params;

    eventService
        .deleteEventById(id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

export default {
    findAllEvents,
    findEventById,
    createEvent,
    deleteEventById,
};
