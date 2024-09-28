import Link from 'next/link';
import React from 'react';

const page = () => {
	return (
		<div>
		<p>Dashboard page</p>
		<p className='text-blue-500 underline'><Link href="/">Go to Home</Link></p>

		</div>
	);
};

export default page;