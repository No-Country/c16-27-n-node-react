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

const createEvent =  (newEvent) => {
    
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

    let updatedEvent;
    
    if (type === "online"){
        updatedEvent =  eventSchema.findByIdAndUpdate(
            id, 
            // {...searched}, 
            {creatorUserId, title, description, image, type, category, address, attendees, date, $unset: {city:''}}, 
            {new : true}
        )
        
    } else {
        updatedEvent =  eventSchema.findByIdAndUpdate(
            id, 
            {creatorUserId, title, description, image, type, category, address, attendees, date, city}, 
            {new : true}
        )
    }
    
        

    console.log(updateEvent);

    return await updatedEvent
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