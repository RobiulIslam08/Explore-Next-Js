/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: 'www.themealdb.com',
			port: '', // Leave it empty if no specific port is used
			pathname: '/images/media/**', // Allow all images under this path
		  },
		],
	  },
	  
	
};

export default nextConfig;


  