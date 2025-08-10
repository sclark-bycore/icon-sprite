// scripts/gen-dist-index.js
import fs from "fs";
import path from "path";

const __dirname = path.resolve(process.cwd());

const distDir = path.join(__dirname, "dist");
const iconsDir = path.join(distDir, "icons");
const jsOut = path.join(distDir, "index.js");
const dtsOut = path.join(distDir, "index.d.ts");

// 1. Find every compiled icon wrapper
const files = fs.readdirSync(iconsDir).filter((f) => f.endsWith(".js") && f !== "index.js");
// 2. Build the JS barrel
const jsLines = files.map((file) => {
	const name = path.basename(file, ".js");
	return `export { ${name} } from "./icons/${name}.js";`;
});

// 3. Build the TS declaration barrel
const dtsLines = files.map((file) => {
	const name = path.basename(file, ".js");
	return `export { ${name} } from "./icons/${name}";`;
});

// 4. Write both barrels
fs.writeFileSync(jsOut, jsLines.join("\n") + "\n", "utf8");
fs.writeFileSync(dtsOut, dtsLines.join("\n") + "\n", "utf8");

console.log(`✅ Wrote ${files.length} icons to dist/index.js and dist/index.d.ts`);
