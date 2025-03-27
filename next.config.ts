import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	output: "export",
	basePath: "/001-recipe-page-main",
	assetPrefix: "/001-recipe-page-main",
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

export default nextConfig;
