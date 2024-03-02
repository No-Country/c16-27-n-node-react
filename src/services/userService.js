import userSchema from './../models/user.js';
import eventSchema from './../models/event.js'

const findUserByEmail = (email) => {

    return userSchema
        .findOne({email:email})
        .then (data => {
            console.log();
            return data
        })
}

const attendEvent = (eventId, attendeeEmail) => {
    
    
    const updatedEvent = eventSchema.find({_id:eventId})
        .then(async (data) => {

            const { attendees } = data[0];

            if(!attendees.includes(attendeeEmail)){
                attendees.push(attendeeEmail);
                
                return await eventSchema
                .findByIdAndUpdate({_id:eventId},{ attendees : attendees},{new: true})
                .then((data) => {
                    return data;
                })
                .catch((err) => {
                    return err
                });
            } else {
                return "El usuario ya existe";
            }
        })

    console.log(updatedEvent);

    return updatedEvent

}

export default {
    findUserByEmail,
    attendEvent,
};