import Link from 'next/link';
import React from 'react';

const VissionPage = () => {
	return (
		<div>
			<p>History Page</p>
			<p className='underline'><Link href='/about/history/vission'>Visson page </Link></p>
		</div>
	);
};

export default VissionPage;