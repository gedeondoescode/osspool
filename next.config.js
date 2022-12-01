/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		appDir: false, //NOTE: need to do more research on this
	},
};

module.exports = nextConfig;
