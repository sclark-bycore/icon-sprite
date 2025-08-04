#!/usr/bin/env node
import fs from "fs";
import path from "path";

const __dirname = path.resolve(process.cwd());

// 1️⃣ Where Lucide's raw SVGs live
const ICON_SVG_DIR = path.resolve(__dirname, "node_modules/lucide-static/icons");

// 2️⃣ Where to write your wrappers
const OUT_DIR = path.resolve("src/icons");
fs.mkdirSync(OUT_DIR, { recursive: true });

// 3️⃣ Read every SVG filename
const files = fs.readdirSync(ICON_SVG_DIR).filter((f) => f.endsWith(".svg"));

// 4️⃣ Helper: kebab ⇄ Pascal
const toPascal = (s) =>
	s
		.split("-")
		.map((w) => w[0].toUpperCase() + w.slice(1))
		.join("");

// 5️⃣ Generate one .tsx per icon
for (const file of files) {
	const id = file.replace(".svg", ""); // e.g. "arrow-right"
	const pascal = toPascal(id); // "ArrowRight"
	const wrapperTsx = `\
import { ${pascal} as DevIcon, type LucideProps } from "lucide-react"
import { SPRITE_PATH } from "../../src/config.js";
interface Props extends LucideProps { size?: number | string; }
export const ${pascal}: React.FC<Props> = ({size, ...props}) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} size={size}/>
  ) : (
    <svg {...props}
    {...(size != null ? { width: size, height: size } : {})}
		>
      <use href={\`\${SPRITE_PATH}#${id}\`} />
    </svg>
  )
`;
	fs.writeFileSync(path.join(OUT_DIR, `${pascal}.tsx`), wrapperTsx);
}

console.log(`✅ Generated ${files.length} icon wrappers in ${OUT_DIR}`);
