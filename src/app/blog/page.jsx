import Link from 'next/link';
import React from 'react';

const BlogPage = () => {
	const blogs = [
		{
		  "title": "Learn JavaScript",
		  "slug": "learn-javascript",
		  "description": "A complete guide to mastering JavaScript from beginner to advanced levels."
		},
		{
		  "title": "React.js for Beginners",
		  "slug": "reactjs-for-beginners",
		  "description": "An introduction to React.js for building dynamic user interfaces."
		},
		{
		  "title": "Node.js Fundamentals",
		  "slug": "nodejs-fundamentals",
		  "description": "Understand the core concepts of Node.js and build scalable server-side applications."
		},
		{
		  "title": "Express.js Quickstart",
		  "slug": "expressjs-quickstart",
		  "description": "A practical guide to getting started with Express.js for web development."
		},
		{
		  "title": "Understanding MongoDB",
		  "slug": "understanding-mongodb",
		  "description": "Learn MongoDB, a popular NoSQL database for modern web applications."
		},
		{
		  "title": "Master CSS Grid",
		  "slug": "master-css-grid",
		  "description": "A comprehensive tutorial on CSS Grid for creating complex web layouts."
		},
		{
		  "title": "Introduction to Next.js",
		  "slug": "introduction-to-nextjs",
		  "description": "A beginner-friendly guide to Next.js for building server-side rendered React applications."
		},
		{
		  "title": "Building REST APIs",
		  "slug": "building-rest-apis",
		  "description": "Learn how to design and build RESTful APIs using modern web technologies."
		},
		{
		  "title": "JavaScript ES6 Features",
		  "slug": "javascript-es6-features",
		  "description": "Discover the new and powerful features introduced in ES6 for JavaScript developers."
		},
		{
		  "title": "Tailwind CSS Basics",
		  "slug": "tailwind-css-basics",
		  "description": "Learn how to build responsive websites quickly with the utility-first Tailwind CSS framework."
		}
	  ]
	  
	return (
		<div>
		{
			blogs.map((blog) =>
			 <div key={blog.slug} className='border px-4 py-3'>
				<p>{blog.title}</p>
				<p>{blog.description}</p>
				<button  className='px-3 py-1 bg-teal-700'><Link href={`/blog/${blog.slug}`}><button  className='px-3 py-1 bg-teal-700'>View Details</button></Link></button>
			</div>)
		}
		</div>
	);
};

export default BlogPage;