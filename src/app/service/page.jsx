import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';


const getTime = async() =>{
	const res = await fetch('http://localhost:3000/time', {next:{revalidate: 5}})
	const data = await res.json()
	return data.currentTime

}
const Service =  async() => {
	const currentTime = await getTime()
	const session = await getServerSession(authOptions)
	console.log('session',session)
	return (
		<div>
			service page 
			<p>Time: {currentTime}</p>
		</div>
	);
};

export default Service;


