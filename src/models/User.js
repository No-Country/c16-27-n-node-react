import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  image: Blob,
  password: String,
  email: String,
  country: String,
  isAdmin: Boolean,
});



const users = mongoose.model("Users", userSchema);

export default users;
