import mongoose from "mongoose";

const userSchema = mongoose.Schema({});


const user = mongoose.model("User", userSchema);

export default user;