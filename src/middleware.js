
// first learning
// import { NextResponse } from "next/server"
// export const middleware = (request) => {
// 	return NextResponse.next()
// }
// export const config = () =>{
// 	matcher: '/dashboard'
// }


// second learning
// যদি কেউ service page এ যেতে চায় তাহলে তাকে redirect করে contact page এ নিয়ে যাবে
// import { NextResponse } from "next/server"
// export const middleware = (request) => {
// 	return NextResponse.redirect(new URL('/contact', request.url))
// }
// export const config = {
// 	matcher: '/service'
// }



// third learning
// category এর details page এ নিয়ে যাবে
// import { NextResponse } from "next/server"
// export const middleware = (request) => {
// 	return NextResponse.rewrite(new URL('/category/categoryDetails', request.url))
// }
// export const config = {
// 	matcher: '/category'
// }


// fouth learning
// conditionaly redirect করার জন্য 
// import { NextResponse } from "next/server"

// export const middleware = (request) => {
// 	if (request.nextUrl.pathname.startsWith('/category')) {
//         return NextResponse.rewrite(new URL('/contact', request.url))
//     }
// }


// fifth learnign
// cookies আছে  কিনা
// import { NextResponse } from "next/server"
// export const middleware = (request) => {
// 	let cookie = request.cookies.get('token')
// 	if(!cookie){
		
// 		return NextResponse.rewrite(new URL('/login', request.url))
// 	}
// }
// export const config = {
// 	matcher:[ '/dashboard', '/about']
// }


// sixth learngin
// cookies আছে কিন্তু যদ িmathc না কের
// import { NextResponse } from "next/server"
// export const middleware = (request) => {
// 	let cookie = request.cookies.get('token')
// 	let co = 'rahad coo'
// 	if(!cookie || cookie.value !== co){
		
// 		return NextResponse.rewrite(new URL('/login', request.url))
// 	}
// }
// export const config = {
// 	matcher:[ '/dashboard', '/about']
// }




// seventh learngin moude =79.6
// dashboard এ যদি user যেতে চায় েএবং যদি token না থাকে তাহলে তাকে redirct করে login page নিয়ে  আসবে । আর লগিন করার পর যেই পেজ এ যেতে চেয়েছিলো সেখানে যেতে দিবে

import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = (request) => {
  let token = cookies(request).get('next-auth.session-token');

  // যদি টোকেন না থাকে, তাহলে লগইন পেইজে রিডিরেক্ট করুন
  if (!token) {
    const redirectUrl = new URL('/api/auth/signin', request.url);
    redirectUrl.searchParams.set('callbackUrl', request.nextUrl.pathname); // আগের route ধরে রাখুন
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard', '/about']
}

