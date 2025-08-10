// src/config.ts
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const DEFAULT_CONFIG = {
	IMPORT_NAME: "@react-zero-ui/icon-sprite",
	SPRITE_PATH: "/icons.svg",
	ROOT_DIR: "",
	CUSTOM_SVG_DIR: "zero-ui-icons",
	OUTPUT_DIR: "public",
	IGNORE_ICONS: ["CustomIcon"],
};

let userConfig = {};
const configFile = path.resolve(process.cwd(), "zero-ui.config.js");

if (fs.existsSync(configFile)) {
	try {
		const mod = await import(pathToFileURL(configFile).href);
		userConfig = mod.default ?? mod;
	} catch (e) {
		// @ts-expect-error
		console.warn("⚠️ Failed to load zero-ui.config.js:", e.message);
	}
}

const merged = { ...DEFAULT_CONFIG, ...userConfig };

export const IMPORT_NAME = merged.IMPORT_NAME;
export const SPRITE_PATH = merged.SPRITE_PATH;
export const ROOT_DIR = merged.ROOT_DIR;
export const CUSTOM_SVG_DIR = merged.CUSTOM_SVG_DIR;
export const OUTPUT_DIR = merged.OUTPUT_DIR;
export const IGNORE_ICONS = merged.IGNORE_ICONS;
