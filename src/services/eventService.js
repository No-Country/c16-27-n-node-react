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

const createEvent = (newEvent) => {

    const event = new eventSchema(newEvent);

    return event
        .save()
        .then((data) => {
            return data;})
        .catch(err => console.log(err));
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
    createEvent,
    deleteEventById,
}