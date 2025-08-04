// src/build-sprite.mjs
import fs from "fs"
import path from "path"
import svgstore from "svgstore"
import { ICONS } from "./used-icons.js"

const toKebab = (s) =>
  s
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
    .replace(/([a-z])([0-9])/g, "$1-$2")
    .replace(/([0-9])([a-z])/g, "$1-$2")
    .toLowerCase()

// ── 1. sets
const needed = new Set(ICONS.map(toKebab))
const found = new Set()

const store = svgstore({
  copyAttrs: ["viewBox", "fill", "stroke", "stroke-width", "stroke-linecap", "stroke-linejoin", "class", "style"],
})
const iconsDir = "node_modules/lucide-static/icons"

// ── 2. build sprite for all icons we actually have
for (const file of fs.readdirSync(iconsDir)) {
  if (!file.endsWith(".svg")) continue

  const id = file.slice(0, -4) // no ".svg"
  if (!needed.has(id)) continue

  found.add(id)
  store.add(id, fs.readFileSync(path.join(iconsDir, file), "utf8"))
}

// ── 3. detect missing icons
const missing = [...needed].filter((id) => !found.has(id))

if (missing.length) {
  throw new Error(`❌ Missing icons: ${missing.join(", ")}\n` + `    → Add the SVGs to lucide-static or fix the import names.\n\n`)
}
const finalSprite = store.toString({ inline: false })

// ── 4. emit sprite only if nothing missing
if (!missing.length) {
  fs.mkdirSync("public", { recursive: true })
  fs.writeFileSync(`public/icons.svg`, finalSprite)

  console.log(`✅  icons.svg built with ${found.size} icons.`)
}
