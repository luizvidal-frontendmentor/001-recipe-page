import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	basePath: "/001-recipe-page",
	assetPrefix: "/001-recipe-page",
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

export default nextConfig;
