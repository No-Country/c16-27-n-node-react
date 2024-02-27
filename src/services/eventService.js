import eventSchema from "./../models/event.js";

const findAllEvents = () => {

    return eventSchema
        .find()
        .then((data) => {
            return data})
        .catch(err => console.log(err));
};

const findEventById = (id) => {
    return eventSchema
        .findById(id)
        .then((data) => {
            return data;})
        .catch(err => console.log(err));
};

const findEventsByUserId = (userId) => {
    return eventSchema
        .find({creatorUserId : userId})
        .then((data) => {
            return data;
        })
        .catch(err => console.log(err));
}

const createEvent = async (newEvent) => {
    const event = new eventSchema(newEvent);

    return event
        .save()
        .then((data) => {
            return data;})
        .catch(err => console.log(err));
};

const updateEvent = async (id, event) => {

    const { creatorUserId, 
            title, 
            description, 
            image, 
            type,
            category,
            address,
            city,
            date,
            attendees } = event;
    
    return  await eventSchema
        .findByIdAndUpdate(
            id, 
            {creatorUserId, title, description, image, type, category, address, city, date, attendees}, 
            {new : true}
        )
        .then(async (data) => {
            console.log(data);
            return data;})
        .catch(err => console.log(err))

};


const deleteEventById = (id) => {
    return eventSchema
        .deleteOne({_id : id})
        .then(data => {
            return data})
        .catch(err => console.log(err));
};

export default {
    findAllEvents,
    findEventById,
    findEventsByUserId,
    createEvent,
    updateEvent,
    deleteEventById,
}