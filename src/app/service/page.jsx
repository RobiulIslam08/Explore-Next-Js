import React from 'react';


const getTime = async() =>{
	const res = await fetch('http://localhost:3000/time', {next:{revalidate: 5}})
	const data = await res.json()
	return data.currentTime

}
const Service =  async() => {
	const currentTime = await getTime()
	return (
		<div>
			service page 
			<p>Time: {currentTime}</p>
		</div>
	);
};

export default Service;


