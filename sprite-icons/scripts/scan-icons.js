// scripts/scan-icons.js
import fs from "fs";
import path from "path";
import * as babel from "@babel/core";
import traverseImport from "@babel/traverse";
import * as t from "@babel/types";
import { IMPORT_NAME, ROOT_DIR } from "./config.js";

const traverse = traverseImport.default;
const ICONS = new Set();
// Scan the app directory of the consuming project
const ROOT = path.join(process.cwd(), ROOT_DIR);

// walk all TSX/JSX files
function collect(dir) {
	for (const f of fs.readdirSync(dir)) {
		const full = path.join(dir, f);
		if (fs.statSync(full).isDirectory()) {
			collect(full);
		} else if (/\.[jt]sx$/.test(full)) {
			const src = fs.readFileSync(full, "utf8");
			const ast = babel.parseSync(src, {
				filename: full,
				presets: [
					["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
					["@babel/preset-react", { runtime: "automatic" }],
				],
				sourceType: "module",
			});
			traverse(ast, {
				ImportDeclaration(path) {
					const from = path.node.source.value;
					// adjust this to match your icon lib path
					if (from === IMPORT_NAME) {
						for (const spec of path.node.specifiers) {
							if (t.isImportSpecifier(spec)) {
								ICONS.add(spec.imported.name);
							}
						}
					}
				},
			});
		}
	}
}

collect(ROOT);

// write the result for build-sprite to consume
const list = [...ICONS].sort();
fs.writeFileSync("scripts/used-icons.js", `export const ICONS = ${JSON.stringify(list, null, 2)};`);
console.log(`✅ Found ${list.length} icons:`, list);
