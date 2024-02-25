import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
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
  maxUsers: {
    type: Number,
    required: true,
  },
  address: {
    type: String
  },  
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  },
  attendees: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
  }]  
},
  {
    timestamps: { createdAt: true, updatedAt: true }
  }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
