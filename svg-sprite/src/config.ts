import fs from "fs";
import path from "path";
import { createRequire } from "module";

// Default config
let config = {
	IMPORT_NAME: "@react-zero-ui/svg-sprite",
	SPRITE_PATH: "/icons.svg",
	ROOT_DIR: "app",
	CUSTOM_SVG_DIR: "custom-icons",
	OUTPUT_DIR: "public",
};

// Check for user config (synchronously)
const userConfigPath = path.resolve(process.cwd(), "zero-ui.config.js");
if (fs.existsSync(userConfigPath)) {
	try {
		const require = createRequire(import.meta.url);
		delete require.cache[userConfigPath]; // Clear cache for hot reloading
		const userConfig = require(userConfigPath);
		config = { ...config, ...userConfig };
	} catch (e) {
		// @ts-expect-error
		console.warn("⚠️  Failed to load zero-ui.config.js:", e.message);
	}
}

export const IMPORT_NAME = config.IMPORT_NAME;
export const SPRITE_PATH = config.SPRITE_PATH;
export const ROOT_DIR = config.ROOT_DIR;
export const CUSTOM_SVG_DIR = config.CUSTOM_SVG_DIR;
export const OUTPUT_DIR = config.OUTPUT_DIR;
