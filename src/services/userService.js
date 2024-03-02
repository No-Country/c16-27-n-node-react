import userSchema from './../models/user.js';

const findUserByEmail = (email) => {

    return userSchema
        .findOne({email:email})
        .then (data => {
            console.log();
            return data
        })
}


export default {
    findUserByEmail
};