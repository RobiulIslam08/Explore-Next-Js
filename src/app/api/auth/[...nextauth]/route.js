//module theke dekhe dekhe korchi
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";


export const authOptions = {
	secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
	
	session: {
	  strategy: 'jwt',
	  maxAge: 30 * 24 * 60 * 60,
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
	callbacks:{

		async jwt({ token, account, user }) {
			// Persist the OAuth access_token and or the user id to the token right after signin
			if (account) {
			  token.type = user.type // এইখানে ডিফাইন করে দিলাম যে type টা হবে user.type ।  এই  user টা currrent user থেকে পাবে
			 
			}
			return token
		  },
		async session({ session, token }) {
			session.user.type = token.type  // এখানে sesison এর user.type  হবে token এ যে type টা সেট করে দিলাম সেটা। এই user টা session এর user
			return session
		  },

// for sign in protected route then >
		  async redirect({ url, baseUrl }) {
			// সাইন ইন করার পর যেখানে যেতে চেয়েছিল, সেখানে রিডিরেক্ট করুন
			// যদি url baseUrl এর মধ্যে থাকে, সেটি ব্যবহার করুন
			if (url.startsWith(baseUrl)) {
			  return url;
			}
			// যদি আগে থেকে কোনো specific রুটে যাওয়ার চেষ্টা করা হয়
			if (url) {
			  return url;
			}
			// অন্যথায় ডিফল্ট রুটে পাঠান, যেমন ড্যাশবোর্ড
			return `${baseUrl}/dashboard`;
		  }
		  
	}
  }
const handler = NextAuth(authOptions);

const users = [
	{	
		id: 1,
		name: 'robiul',
		email: 'robiul@gmail.com',
		password: 'password',
		type:'admin',
		image: 'https://picsum.photos/200/300'
	},
	{	
		id: 2,
		name: 'rahad',
		email: 'rahad@gmail.com',
		password: 'password',
		type: 'modarator',
		image: 'https://picsum.photos/200/300'
	},
	{	
		id: 3,
		name: 'arif',
		email: 'arif@gmail.com',
		password: 'password',
		type: 'user',
		image: 'https://picsum.photos/200/300'
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
