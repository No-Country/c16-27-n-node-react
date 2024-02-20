import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true,
  },
  image:{
    type: String,
    required: true,
  },
  date:{
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true,
    enum : ['online', 'presencial'],
  },
  creatorUserId:{
    type: String,
    required: true,
  },
  maxUsers:{
    type: Number,
    required: true,
  },
  place:{
    type: String,
    required: true,
  },
});


export default mongoose.model("Event", eventSchema);
