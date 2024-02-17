import mongoose from "mongoose";

const eventSchema = mongoose.Schema({});


const event = mongoose.model("Event", eventSchema);

export default event;