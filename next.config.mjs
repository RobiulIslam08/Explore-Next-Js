/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
		  {
			protocol: 'https',
			hostname: '*',
			port: '', // Leave it empty if no specific port is used
			pathname: '/**', // Allow all images under this path
		  },
		],
	  },
	  
	
};

export default nextConfig;


  