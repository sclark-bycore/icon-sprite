// src/scan-icons.js
import fs from "fs"
import path from "path"
import * as babel from "@babel/core"
import traverseImport from "@babel/traverse"
import * as t from "@babel/types"
const traverse = traverseImport.default
const iconNames = new Set()

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file)
    if (fs.statSync(full).isDirectory()) {
      walk(full)
    } else if (full.endsWith(".tsx")) {
      const code = fs.readFileSync(full, "utf8")
      const ast = babel.parseSync(code, {
        filename: full,
        presets: [
          ["@babel/preset-typescript", { isTSX: true, allExtensions: true }],
          ["@babel/preset-react", { runtime: "automatic" }],
        ],
        sourceType: "module",
      })
      if (!ast) continue

      traverse(ast, {
        JSXElement(path) {
          const opening = path.node.openingElement
          const name = opening.name
          // here we find all the elements that are named "Icon" or return
          if (!t.isJSXIdentifier(name) || name.name !== "Icon") return

          for (const attr of opening.attributes) {
            // here we find all the attributes that are named "name" and are a string literal
            if (t.isJSXAttribute(attr) && t.isJSXIdentifier(attr.name, { name: "name" })) {
              iconNames.add(attr.value.value)
            }
          }
        },
      })
    }
  }
}

const rootDir = "app" // or "src" or whatever your root is
const currentDir = process.cwd()
walk(path.join(currentDir, rootDir))

const output = [...iconNames].sort()
console.log("output: ", output)
fs.writeFileSync("scripts/used-icons.js", `export const ICONS = ${JSON.stringify(output, null, 2)}`)
console.log(`✅ Found ${output.length} used icons`)
