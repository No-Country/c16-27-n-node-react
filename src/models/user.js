import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String, 
    required: true 
  },
  lastName: { 
    type: String, 
    required: true 
  },
  image: { 
    type: Blob, 
    required: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true 
  },
  country: { 
    type: String, 
    required: true 
  },
  isAdmin: {
    type: Boolean,
  }
});

const users = mongoose.model("Users", userSchema);

export default users;