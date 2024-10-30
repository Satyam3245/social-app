import CredentialsProvider from "next-auth/providers/credentials";
export const option = {
    providers: [
        CredentialsProvider({
          name: "Email",
          credentials: {
            email: { label: "Email", type: "text", placeholder: "abc@gmail.com" },  
            password: { label: "Password", type: "password", placeholder: "******" }
          },
          async authorize(credentials, req) {
            
            const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
            if (user) {
              return user
            } else {
              return null
            }
          }
        })
      ]
}