import Link from 'next/link';
import React from 'react';

const AboutContent = () => {
	return (
		<div className=' flex  gap-10 justify-center'>
			<p><Link href='/about/history'>History</Link></p>
			<p>|</p>
			<p>	<Link href='/about/mission'>Mission</Link></p>
		</div>
	);
};

export default AboutContent;