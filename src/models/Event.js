import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  title: String,
  description: String,
  image: Blob,
  date: Date,
  type: Enumerator,
  creatorUserId: mongoose.Types.ObjectId,
  maxUsers: Uint16Array,
});

const eventOnlineSchema = mongoose.Schema({
  eventId: mongoose.type.ObjectId,
  link: String,
});

const eventOnSuiteSchema = mongoose.Schema({
  eventId: mongoose.type.ObjectId,
  place: String,
});


const events = mongoose.model("Events", eventSchema);
export default events;
