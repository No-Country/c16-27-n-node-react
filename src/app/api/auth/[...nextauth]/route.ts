import { profile } from 'console';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],

  callbacks: {
    async signIn(params){
      try {
        const { user } = params;
        // const { profile } = user;
        console.log("User email:", user.email); // dralpaca47@gmail.com
        console.log("User name:", user.name); // Dr Alpaca
        console.log("User image:", user.image); // Image URL
        const response = await fetch(`${process.env.API_URL}/api/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ user:{
            email: user.email,
            name: user.name,
            image: user.image

          }})
        });

        if (response.ok) {
          return true;
        }else{
          return false
        }
      } catch (error) {
        console.log(error);
        return false;
      }

    }
  }
});

export { handler as GET, handler as POST };
