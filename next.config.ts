import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */

	images: {
		remotePatterns: [
			{
				hostname: "maggiesmilk.com",
			},
		],
	},
};

export default nextConfig;
