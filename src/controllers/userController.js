
import { error } from "console";
import User from "../models/user.js";
import userService from "./../services/userService.js";

// const find = async (req, res) => {
//   const user = await Users.find();
//   res.json(user);
// };

// const findId = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await Users.findById(id);
//     res.json(user);
//   } catch (err) {
//     res.status(404).json();
//     console.log(err);
//   }
// };

// const save = async (req, res) => {
//   try {
//     const body = req.body;
//     const user = new Users(body);
//     await user.save();
//     res.json(user);
//   } catch (err) {
//     res.status(500).json()
//     console.log(err);
//   }
// };

// const edit = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await Users.findByIdAndUpdate(id, req.body, { new: true });
//     res.json(user);
//   } catch (err) {
//     res.status(500).json()
//     console.log(err);
//   }
// };

// const deleteById = async (req, res) => {
//   try {
//     const id = req.params.id;
//     const user = await Users.findByIdAndDelete(id);
//     res.json(user);
//   } catch (err) {
//     res.status(500).json()
//     console.log(err);
//   }
// };

const findUserByEmail = async (req, res) => {

    const { email } = req.body

    await userService.findUserByEmail(email)
        .then((data) => res.status(200).json(data))
        .catch((error) => res.status(404).json(error));

}


// import NextAuth from "next-auth" 
// const Providers = nextAuth.providers;

const saveUserSession = async (req, res) => {
    const { user } = req.body; 
    // console.log("Saving user session", user);
    // console.log(user?.email);
    // console.log(user?.name); 
    try {   
        if (user && user.email && user.name) {
            await User.findOneAndUpdate(
                { email: user.email },
                { 
                    name: user.name,
                    email: user.email,
                    image: user.image
                },
                { upsert: true }
            );
            console.log("User session saved successfully");
        } else {
            console.error("Invalid user data received");
        }
        res.redirect('http://localhost:3000/');
    } catch (error) {
        console.error('Error saving user session:', error);
    }
};


// const handler = NextAuth({
//   providers: [
//     Providers.GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn(user, account, profile) {
//       try {
//         await saveUserSession(user.email, user.name);
//       } catch (error) {
//         console.error('Error saving user session:', error);
//       }

//       return true; // Return true to indicate successful sign-in
//     },
//   },
// });
export default {
  // find,
  // findId,
  // save,
  // edit,
  // deleteById,
  saveUserSession,
  findUserByEmail
};