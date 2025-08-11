<div align="center">
  
  # @react-zero-ui/icon-sprite

  [![MIT](https://img.shields.io/badge/License-MIT-green.svg)](#) [![npm](https://img.shields.io/npm/v/@react-zero-ui/icon-sprite.svg)](#)

  
</div>

> [!NOTE]
> **Generates one SVG sprite containing only the icons you used** - Lucide + custom SVGs.
> DX with real `<Icon/>` in dev ➡️ zero-runtime `<use/>` in prod.

> Part of the [React Zero-UI](https://github.com/react-zero-ui) ecosystem.
 

---

## 🧠 What This Library Does

1. **Full Lucide-React DX in development**
   Easy imports, hot reload, JSX props — import icons from `@react-zero-ui/icon-sprite` instead of `lucide-react`.

2. **Zero-runtime in production**  
   Every icon becomes `<use href="/icons.svg#id" />` at build time.

3. **Smallest possible sprite**  
   Only icons actually used in your app are included.

## 🙏 Custom Icon Support
Drop SVGs into **`/zero-ui-icons/`** at your project root, then use `<CustomIcon />` with the `name` prop set to the file name (without `.svg`).

> [!TIP]
>```txt
>📁/zero-ui-icons/
>   └── dog.svg 
> ```
> ```tsx
>import { CustomIcon } from "@react-zero-ui/icon-sprite";
>//❗The name MUST match the name of the  file name (no .svg extension).
><CustomIcon name="dog" size={24} />
>```


---

## 📦 Installation

```bash
npm install @react-zero-ui/icon-sprite
```

---

## ❗ Build Command
> [!CAUTION]
> Run this before your app build so the sprite exists.
>```bash
>npx zero-icons
>```

This command builds the icons sprite for production.

Or add this to your `package.json` scripts:
```json
{
  "scripts": {
    "prebuild": "zero-icons",
    "build": "your build command"
  }
}
```
That's it!

---

## 🔨 Usage

> [!WARNING]
> **Pass `size`, or both `width` and `height`, to ensure identical dev/prod rendering.**  
> Dev defaults (Lucide 24×24) differ from sprite viewBoxes in production. Missing these props will **very likely** change the visual size in prod.

### For Lucide Icons:

```tsx
import { ArrowRight, Mail } from "@react-zero-ui/icon-sprite";

<ArrowRight size={24} className="text-gray-600" />
```

### For Custom Icons:

```tsx
import { CustomIcon } from "@react-zero-ui/icon-sprite";

<CustomIcon name="dog" size={32} />
```
---

## 🧪 How It Works (Under the Hood)

### ✅ Development Mode: DX First

In dev, each icon wrapper looks like this:

```tsx
import { ArrowRight as DevIcon } from "lucide-react";

export const ArrowRight = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-right`} />
    </svg>
  );
```

This ensures:

* Dev uses Lucide's real React components (`lucide-react`)
* Full props support (e.g. `strokeWidth`, `className`)
* No caching issues from SVG sprites
* No FOUC (Flash of Unstyled Content)

### ⚙️ Production Mode: Minimal Runtime, Maximum Speed

At build time:

1. We scan your codebase for all icons statically using Babel + AST traversal
2. We generate a single SVG sprite sheet (`public/icons.svg`)
3. The wrapper components switch to `<use href="/icons.svg#icon-id" />`

---

## ⚡️ Tooling

To generate everything:

```bash
npx zero-icons
```

This runs the full pipeline:

| Script | Purpose |
| --- | --- |
| `scan-icons.js`   | Parse your codebase for used icons (`Icon` usage or named imports) |
| `used-icons.js`   | Collects a list of unique icon names |
| `build-sprite.js` | Uses [`svgstore`](https://github.com/DIYgod/svgstore) to generate `icons.svg` from used Lucide + custom SVGs |


--- 
## ✨ Why This Is Better

* **DX-first**: No flicker. No sprite caching. Live updates.
* **Runtime-free in production**: Sprites are native, fast, lightweight & highly Cached.
* **Only ships the icons you actually use** — smallest possible sprite.
* **Minimal install**: No runtime dependency tree. Just React + Lucide.


---

## 🧠 Final Thoughts

This is one of the **most optimized** icon systems for serious frontends:

* First-class developer experience (DX) with Lucide's React components.
* Production builds with **zero JavaScript**, just SVGs.
* Custom icon support out-of-the-box.
* Strict static analysis = smallest possible bundle.
* Fully compatible with Next.js 15+, Vite, or any modern React stack.

---
 


 <!-- 
 📂 icon-sprite/
├── 📂 node_modules
│   └── 📂 lucide-static
│   │   └── 📂 icons
│   │       └── *icon-name*.svg
├── 📂 dist
│   │── config.js
│   │── index.js
│   │── used-icons.js
│   │── utils.js
│   └── icons.svg
│── 📂 scripts
│   │── build-sprite.js
│   │── gen-dist.js
│   │── gen-wrappers.js
│   │── index.js
│   │── scan-icons.js
│   └── used-icons.js
│── 📂 src
│   │── 📂 icons
│   │   │── *IconName*.tsx
│   │── config.ts
│   └── utils.ts
│── README.md
│── package-lock.json
│── package.json
│── react-zero-ui-icon-sprite-0.1.3.tgz
└── tsconfig.json
 -->