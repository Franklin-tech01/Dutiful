import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				purple: "#532F82",
				primary: "#1E1E4B",
				secondary: "#686868",
				gray: "#F8FAFD",
				grey: "#E7EAF1",
			},
		},
	},
	plugins: [],
};
export default config;
