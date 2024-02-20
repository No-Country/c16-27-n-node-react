import eventSchema from "./../models/event.js";

const find = () => {

    return eventSchema
        .find()
        .then((data) => {
            return data})
        .catch(err => console.log(err));
};

const findById = (id) => {
    return eventSchema
        .findById(id)
        .then((data) => {
            return data;})
        .catch(err => console.log(err));
};

const save = (newEvent) => {

    const event = new eventSchema(newEvent);

    return event
        .save()
        .then((data) => {
            return data;})
        .catch(err => console.log(err));
};

const deleteOne = (id) => {
    return eventSchema
        .deleteOne({_id : id})
        .then(data => {
            return data})
        .catch(err => console.log(err));
};

export default {
    find,
    findById,
    save,
    deleteOne,
}