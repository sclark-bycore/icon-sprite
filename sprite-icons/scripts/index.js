#!/usr/bin/env node
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const scanScript = path.join(__dirname, "scan-icons.js");
const buildScript = path.join(__dirname, "build-sprite.js");

// 1️⃣ Scan imports → scripts/used-icons.js
await import(scanScript);

// 2️⃣ Build SVG sprite → public/icons.svg
await import(buildScript);
