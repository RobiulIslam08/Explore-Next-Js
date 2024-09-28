// import { NextResponse } from "next/server"

// export const middleware = (request) => {
// 	return NextResponse.next()
// }
// export const config = () =>{
// 	matcher: '/dashboard'
// }


// যদি কেউ service page এ যেতে চায় তাহলে তাকে redirect করে contact page এ নিয়ে যাবে
// import { NextResponse } from "next/server"

// export const middleware = (request) => {
// 	return NextResponse.redirect(new URL('/contact', request.url))
// }
// export const config = {
// 	matcher: '/service'
// }


// category এর details page এ নিয়ে যাবে
// import { NextResponse } from "next/server"

// export const middleware = (request) => {
// 	return NextResponse.rewrite(new URL('/category/categoryDetails', request.url))
// }
// export const config = {
// 	matcher: '/category'
// }


// conditionaly redirect করার জন্য 
// import { NextResponse } from "next/server"

// export const middleware = (request) => {
// 	if (request.nextUrl.pathname.startsWith('/category')) {
//         return NextResponse.rewrite(new URL('/contact', request.url))
//     }
// }



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

// cookies আছে কিন্তু যদ িmathc না কের


import { NextResponse } from "next/server"

export const middleware = (request) => {
	let cookie = request.cookies.get('token')
	let co = 'rahad coo'
	if(!cookie || cookie.value !== co){
		
		return NextResponse.rewrite(new URL('/login', request.url))
	}
}
export const config = {
	matcher:[ '/dashboard', '/about']
}