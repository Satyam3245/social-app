import prisma from "@/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
export const option = {
    providers: [
        CredentialsProvider({
          name: "Email",
          credentials: {
            email: { label: "Email", type: "text", placeholder: "abc@gmail.com" },  
            password: { label: "Password", type: "password", placeholder: "******" }
          },
          async authorize(credentials, req) {
            const {email,password}:any = credentials;
            const user = await prisma.user.findUnique({
              where:{
                email:email
              }
            });
            
            if (!user || !(await bcrypt.compare(password, user.password))) {
              throw new Error("Invalid credentials"); 
            }

            return user;
          },
        })
      ],
      secret: process.env.NEXTAUTH_SECRET,
      callbacks:{
        async session({ session, token, user }:any) {
          
          if (token) {
            session.user.id = token.id;
          }
          return session;
        },
        async jwt({ token, user }:any) {
          if (user) {
            token.id = user.id;
          }
          return token;
        }
      }
}