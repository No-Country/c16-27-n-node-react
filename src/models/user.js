import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String, 
    required: true,
    unique: true
  },
  image: { 
    type: String,
    default: 'https://www.svgrepo.com/show/105517/user-icon.svg'    
  }
  
});

const Users = mongoose.model("Users", userSchema);

export default Users;