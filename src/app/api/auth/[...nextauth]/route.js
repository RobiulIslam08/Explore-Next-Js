//module theke dekhe dekhe korchi
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
	secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
	session: {
	  strategy: 'jwt',
	},
	providers: [
	  CredentialsProvider({
		name: 'Credentials',
		credentials: {
		  email: { label: "Email", type: "text", placeholder: "your email", required: true },
		  password: { label: "Password", type: "password", placeholder: "your password", required: true },
		},
		async authorize(credentials) {
		  const {email, password} = credentials;
		  if (!credentials) {
			return null;
		  }
		  if(email){
			  const currentUser = users.find(user => user.email === email)
			  console.log('currnet user', currentUser)
			  if(currentUser){
				  if(currentUser.password === password){
					  return currentUser
				  }
			  }
		  }
		  return null
	  
  
		 
		},
	  }),
	],
  }
const handler = NextAuth(authOptions);

const users = [
	{	
		id: 1,
		name: 'robiul',
		email: 'robiul@gmail.com',
		password: 'password'
	},
	{	
		id: 2,
		name: 'rahad',
		email: 'rahad@gmail.com',
		password: 'password'
	},
	{	
		id: 3,
		name: 'arif',
		email: 'arif@gmail.com',
		password: 'password'
	},
]
export { handler as GET, handler as POST };






















//chatgpt theke nichi
// import NextAuth from "next-auth/next";
// import CredentialsProvider from "next-auth/providers/credentials";

// const handler = NextAuth({
//   session: {
//     strategy: 'jwt',
//   },
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: "Email", type: "text", placeholder: "your email", required: true },
//         password: { label: "Password", type: "password", placeholder: "your password", required: true },
//       },
//       async authorize(credentials, req) {
//         if (!credentials) {
//           return null;
//         }
	

//         // Here you can add your custom logic to validate the user
//         const user = { id: 1, name: "User", email: credentials.email };
        
//         // If user is valid, return user object, else return null
//         if (credentials.email === "test@example.com" && credentials.password === "password123") {
//           return user;
//         } else {
//           return null;
//         }
//       },
//     }),
//   ],
// });

// export { handler as GET, handler as POST };
