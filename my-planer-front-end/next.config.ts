import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	basePath: '/1planer',
	trailingSlash: true,
	reactStrictMode: true,
	// Если используешь images
	images: {
		unoptimized: true, // Отключаем оптимизацию, если нет домена для images
	},
	// Если используешь rewrites или redirects
	async redirects() {
		return [];
	},
	async rewrites() {
		return [];
	},
};

export default nextConfig;
