import mongoose from "mongoose";
import userSchema from "./user.js";

const eventSchema = mongoose.Schema({
  creatorUserId: {
    type: String,
    required: true,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Users',
  },
  title: {
    type: String,
    required: true,
  }, 
  description: {
    type: String,
    required: true,
  }, 
  image: {
    type: String,
    default: 'https://icon-library.com/images/events-icon-png/events-icon-png-6.jpg'
  },  
  type: {
    type: String,
    required: true,
    enum: ['online', 'onSuite'],
  },  
  category: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required : true,
  },
  city: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  attendees: {
    type: [String],    
    // type: [Object],
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Users'
  }
},
  {
    timestamps: { createdAt: true, updatedAt: true }
  }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
