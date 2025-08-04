#!/usr/bin/env node
import fs from "fs";
import path from "path";
import svgstore from "svgstore";
import { ICONS } from "./used-icons.js";
import { createRequire } from "module";
import { SPRITE_PATH } from "../src/config.js";

const require = createRequire(import.meta.url);

// 1️⃣ Locate lucide-static icons folder via require.resolve
const sample = require.resolve("../../../lucide-static/icons/mail.svg");
const iconsDir = path.dirname(sample);

// 2️⃣ PascalCase → kebab-case
function toKebab(s) {
	return s
		.replace(/([a-z0-9])([A-Z])/g, "$1-$2")
		.replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
		.toLowerCase();
}

// 3️⃣ Build sets
const needed = new Set(ICONS.map(toKebab));
const store = svgstore({
	copyAttrs: ["viewBox", "fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "style", "size"],
});
const found = new Set();

// 4️⃣ Add only the used SVGs
for (const file of fs.readdirSync(iconsDir)) {
	if (!file.endsWith(".svg")) continue;
	const id = file.slice(0, -4);
	if (!needed.has(id)) continue;
	found.add(id);
	store.add(id, fs.readFileSync(path.join(iconsDir, file), "utf8"));
}

// 5️⃣ Error on missing
const missing = [...needed].filter((id) => !found.has(id));
if (missing.length) {
	throw new Error(`❌ Missing icons: ${missing.join(", ")}`);
}

// 6️⃣ Write the sprite under the consumer's public/
const sprite = store.toString({ inline: true });
const outDir = path.join(process.cwd(), "public");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, SPRITE_PATH), sprite);

console.log(`✅ Built public/icons.svg with ${found.size} icons.`);
