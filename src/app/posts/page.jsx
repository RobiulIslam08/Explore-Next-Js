import Link from 'next/link';
import React from 'react';


const getPost = async() => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
	const data = await response.json()
	return data
}
const PostPage = async () => {
	const posts =await getPost()

	return (
		<div className='my-10 '>
			<h1 className='my-8 text-3xl font-bold text-center '>All Post</h1>
			<div className='grid grid-cols-4 gap-4'>
			{
				posts.slice(0,10).map((post) => 
				<div key={post.id} className=' border border-r-red-500 p-5'>
					<p>title: {post.title}</p>
					<p>body: {post.body}</p>
					<button className='px-3 py-1 bg-green-800 text-semibold '><Link href={`/posts/${post?.id}`}>Veiw Details</Link></button>
				</div>)
			}
			</div>
		</div>
	);
};

export default PostPage;