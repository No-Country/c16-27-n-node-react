import User from "../models/user.js";
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

export {saveUserSession};
