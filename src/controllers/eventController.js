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

const find = (req,res) => {
    eventService
        .find()
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

const findById = (req,res) => {

    const { id } = req.params;

    eventService
        .findById(id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

const save = (req,res) => {

    const body = req.body;

    eventService
        .save(body)
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

const deleteOne = (req,res) => {
    
    const { id } = req.params;
    
    eventService
        .deleteOne(id)
        .then(data => res.json(data))
        .catch(err => res.json(err));
};

export default {
    find, 
    findById, 
    save, 
    deleteOne
};
