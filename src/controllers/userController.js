import User from "../models/user.js";
// import NextAuth from "next-auth" 
// const Providers = nextAuth.providers;

const saveUserSession = async (user) => {
    console.log(user)
  try {   

    await User.findOneAndUpdate(
      { email: user.email },
      {
        $setOnInsert: {
          email: user.email,
          name: user.name,
        },
      },
      { upsert: true, new: true }
    );
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
