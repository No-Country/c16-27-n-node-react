import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstName: {
    type: String, 
    required: true 
  },
  image: { 
    type: String,
    default: 'https://www.svgrepo.com/show/105517/user-icon.svg'    
  },
  password: { 
    type: String, 
    required: true 
  }  
});

const Users = mongoose.model("Users", userSchema);

export default Users;