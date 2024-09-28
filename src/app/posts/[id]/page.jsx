import React from 'react';

const postDetails = async(id) => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	const data = await response.json()
	return data
}
const page =async ({params}) => {
	console.log(params)
	const {title, body} = await postDetails(params.id)

	return (
		<div>
			<p>Post data {params.id}</p>

			<p><span className='text-2xl font-bold'>Title</span> {title}</p>
			<p><span className='text-2xl font-bold'>body</span> {body}</p>
		</div>
	);
};

export default page;