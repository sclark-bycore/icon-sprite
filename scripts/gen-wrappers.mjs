#!/usr/bin/env node
import fs from "fs"
import path from "path"

// 1️⃣ Where Lucide's raw SVGs live
const ICON_SVG_DIR = path.dirname(require.resolve("../lucide-static/icons/mail.svg"))

// 2️⃣ Where to write your wrappers
const OUT_DIR = path.resolve("app/components/ui")
fs.mkdirSync(OUT_DIR, { recursive: true })

// 3️⃣ Read every SVG filename
const files = fs.readdirSync(ICON_SVG_DIR).filter((f) => f.endsWith(".svg"))

// 4️⃣ Helper: kebab ⇄ Pascal
const toPascal = (s) =>
  s
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("")

// 5️⃣ Generate one .tsx per icon
for (const file of files) {
  const id = file.replace(".svg", "") // e.g. "arrow-right"
  const pascal = toPascal(id) // "ArrowRight"
  const wrapperTsx = `\
import { ${pascal} as DevIcon, type LucideProps } from "lucide-react"
import { SPRITE_PATH } from "../lib/sprite-path"

export const ${pascal}: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={\`\${SPRITE_PATH}#${id}\`} />
    </svg>
  )
`
  fs.writeFileSync(path.join(OUT_DIR, `${pascal}.tsx`), wrapperTsx)
}

// 6️⃣ Generate index.ts
const exports = files
  .map((f) => {
    const id = f.replace(".svg", "")
    const pascal = toPascal(id)
    return `export { ${pascal} } from "./${pascal}"`
  })
  .join("\n")
fs.writeFileSync(path.join(OUT_DIR, "index.ts"), exports + "\n")

console.log(`✅ Generated ${files.length} icon wrappers in ${OUT_DIR}`)
