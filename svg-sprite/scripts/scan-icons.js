#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as babel from "@babel/core";
import traverseImport from "@babel/traverse";
import * as t from "@babel/types";
import { IMPORT_NAME, ROOT_DIR } from "../src/config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ICONS = new Set();

// 1️⃣ Find the consuming app’s root (walk up until we see its package.json)
function findProjectRoot(dir = process.cwd()) {
	while (true) {
		if (fs.existsSync(path.join(dir, "package.json"))) return dir;
		const parent = path.dirname(dir);
		if (parent === dir) break;
		dir = parent;
	}
	throw new Error("Could not locate project root");
}

const projectRoot = findProjectRoot();
const scanRoot = path.join(projectRoot, ROOT_DIR);

// 2️⃣ Recursively scan for ImportDeclaration → IMPORT_NAME
function collect(dir) {
	for (const file of fs.readdirSync(dir)) {
		const full = path.join(dir, file);
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
			traverseImport.default(ast, {
				ImportDeclaration(path) {
					if (path.node.source.value === IMPORT_NAME) {
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

collect(scanRoot);

// 3️⃣ Emit used-icons.js alongside these scripts
const outFile = path.join(__dirname, "used-icons.js");
fs.writeFileSync(outFile, `export const ICONS = ${JSON.stringify([...ICONS].sort(), null, 2)};\n`, "utf8");
console.log(`✅ Found ${ICONS.size} icons; wrote to ${outFile}`);
