<div align="center">
  
  # react-zero-ui/icon-sprite
  
</div>

> [!NOTE]
> **Automatically generates an SVG sprite containing only the icons you used in development** - Lucide + custom SVGs.  

> **Zero-runtime icon sprites for React.** using Lucide icons and custom SVGs - optimized for dev experience and production performance. Part of the [React Zero-UI](https://github.com/react-zero-ui) ecosystem.
 

---

## 🧠 What This Library Does

This package gives you:

1. **Full Lucide-React DX in development**
   Easy Imports, Instant updates, hot-reloading, JSX props, no caching issues. Use Just like Lucid but import the icon from `@react-zero-ui/icon-sprite` instead of `lucide-react`.

2. **Zero-runtime SVG sprite usage in production**
   Replaces every icon component with a `<use href="/icons.svg#id" />` element at build time.

3. **Tree-shaking via static analysis**
   Icons are only included in the final sprite if your app actually uses them.

## 🙏 Custom icon support
   Just drop SVGs into `app/zero-ui-icons/`, and use the `<CustomIcon/>` component. set the `name` prop to the name of the icon file want to use. 

> [!TIP]
>```txt
>📁/public/zero-ui-icons/
>   └── dog.svg 
>```
>```tsx
>import { CustomIcon } from "@react-zero-ui/icon-sprite";
>//❗The name MUST match the name of the icon file - .svg extension is not needed.
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
> You must run this command before building your app, for `zero-svg` to work properly.
>```bash
>npx zero-svg
>```

<small>This command builds the icons sprite for production</small>


---

## 🔨 Usage

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
npx zero-svg
```

This runs the full pipeline:

| Script            | Purpose                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| `scan-icons.js`   | Parse your codebase for used icons (`Icon` usage or named imports)                                           |
| `used-icons.js`   | Collects a list of unique icon names                                                                         |
| `build-sprite.js` | Uses [`svgstore`](https://github.com/DIYgod/svgstore) to generate `icons.svg` from used Lucide + custom SVGs |
| `gen-wrappers.js` | Writes individual `.tsx` wrappers per icon to `src/icons/`                                                   |
| `gen-dist.js`     | Emits d.ts/types/index.js for publishing                                                                     |
| `config.js`       | Loads your `zero-ui.config.js` if present                                                                    |


---
<!-- 
## 📁 Directory Structure

```txt
📂 icon-sprite/
├── 📂 dist/
│   ├── 📂 icons/            # Generated Lucide icon wrappers (TSX)
│   ├── config.js           # Final resolved config
│   ├── index.js            # Entrypoint (exports Icon components)
├── 📂 scripts/
│   ├── scan-icons.js       # AST parser → finds used icons
│   ├── used-icons.js       # Stores collected icon names
│   ├── build-sprite.js     # Creates the sprite from Lucide + custom
│   ├── gen-wrappers.js     # Creates TSX files for icons
│   ├── gen-dist.js         # Prepares the package for publishing
├── 📂 src/
│   ├── 📂 icons/            # Same as dist, before compile
│   ├── config.ts           # Default + user config merge
├── 📄 README.md
├── 📄 package.json
└── 📄 tsconfig.json
```

--- -->

## ✨ Why This Is Better

* **DX-first**: No flicker. No sprite caching. Live updates.
* **Runtime-free in production**: Sprites are native, fast, lightweight.
* **Built for Next.js / Vite**: No plugin overhead.
* **Minimal install**: No runtime dependency tree. Just React + Lucide.

---

## 🔧 Configuration (`zero-ui.config.js`)

You can override defaults with a root config file:

```ts
// zero-ui.config.js
export default {
  ROOT_DIR: "src", // where to scan for custom icon usage (default: "")
  SPRITE_PATH: "icons.svg", // public output path
  CUSTOM_SVG_DIR: "zero-ui-icons", // folder for your custom SVGs
}
```

---

## 🧠 Final Thoughts

This is one of the **most optimized** icon systems for serious frontends:

* First-class developer experience (DX) with Lucide's React components.
* Production builds with **zero JavaScript**, just SVGs.
* Custom icon support out-of-the-box.
* Strict static analysis = smallest possible bundle.
* Fully compatible with Next.js 15+, Vite, or any modern React stack.

---
 