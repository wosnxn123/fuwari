import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "绯梦霞间",
	subtitle: "Snowflake Blog",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 340, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: false, // Hide the theme color picker for visitors
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/saicaca/fuwari", // Internal links should not include the base path, as it is automatically added
			external: true, // Show an external link icon and will open in a new tab
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "绯梦雪Snowflake",
	bio: "一个漂浮在幻想之海的孤独岛屿。这里没有喧嚣，只有风的声音和星辰的低语。我在这里记录梦的残骸，描绘不存在的风景，分享触动灵魂的旋律与故事。",
	links: [
//		{
//			name: "Twitter",
//			icon: "fa6-brands:twitter", // Visit https://icones.js.org/ for icon codes
//			// You will need to install the corresponding icon set if it's not already included
//			// `pnpm add @iconify-json/<icon-set-name>`
//			url: "https://twitter.com",
//		},
//		{
//			name: "Steam",
//			icon: "fa6-brands:steam",
//			url: "https://store.steampowered.com",
//		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/saicaca/fuwari",
			},
       {
            name: 'QQ',
            icon: 'fa6-brands:qq',
            url: 'https://qm.qq.com/q/fPoOWUj6J',
            },
       {
            name: 'Email',
            icon: 'fa6-solid:envelope',
            url: 'mailto:3467220367@qq.com',
		},
	],
}

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
