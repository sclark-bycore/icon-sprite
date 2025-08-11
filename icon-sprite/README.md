<div align="center">
  
  # @react-zero-ui/icon-sprite

  [![MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/react-zero-ui/icon-sprite/blob/main/LICENSE) [![npm](https://img.shields.io/npm/v/@react-zero-ui/icon-sprite.svg)](https://www.npmjs.com/package/@react-zero-ui/icon-sprite)


  
</div>

> ![Note](https://img.shields.io/badge/Note-blue)
> **Generates one SVG sprite containing only the icons you used** - Lucide + custom SVGs.
> DX with real `<Icon/>` in dev ➡️ zero-runtime `<use/>` in prod.

> Part of the [React Zero-UI](https://github.com/react-zero-ui) ecosystem.
 

---

**📊 Live Demo — ~270% Smaller HTML**
**See the difference:** [View Demo](https://zero-ui.dev/icon-sprite)

---

## 🧠 What This Library Does

1. **Full Lucide-React DX in development**
   Import from `@react-zero-ui/icon-sprite` instead of `lucide-react`. Hot reload, JSX props, no caching headaches.

2. **Zero-runtime in production**  
   Every icon becomes `<use href="/icons.svg#id" />` at build time.

3. **Smallest possible sprite**  
   Only icons actually used in your app are included.

## 🙏 Custom Icon Support
Drop SVGs into **`/public/zero-ui-icons/`**, then use `<CustomIcon />` with the filename (no `.svg`).

>![Tip](https://img.shields.io/badge/Tip-green)
>```txt
>📁/public
>   └──📁/zero-ui-icons/
>       └──dog.svg
> ```
> ```tsx
>import { CustomIcon } from "@react-zero-ui/icon-sprite";
>//❗The name MUST match the name of the  file name (no .svg extension).
><CustomIcon name="dog" size={24} />
>```


>![Info](https://img.shields.io/badge/Info-blue)
> In dev you may see a brief FOUC using custom icons; this is removed in production.



---

## 📦 Installation

```bash
npm install @react-zero-ui/icon-sprite
```

---

## ❗ Build Command
> ![Caution](https://img.shields.io/badge/Caution-red)
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

> ![Warning](https://img.shields.io/badge/Warning-orange)
> **Pass `size`, or both `width` and `height`, to ensure identical dev/prod rendering.**  
> Dev defaults (Lucide 24×24) differ from sprite viewBoxes in production. Missing these props will **very likely** change the visual size in prod.

### For Lucide Icons:

```tsx
import { ArrowRight, Mail } from "@react-zero-ui/icon-sprite";

<ArrowRight size={24} className="text-gray-600" />
<Mail width={24} height={24} />
```

### Custom Icons:

Drop SVGs into **`/public/zero-ui-icons/`**, then use `<CustomIcon />` with the filename (no `.svg`).
```tsx
import { CustomIcon } from "@react-zero-ui/icon-sprite";
//❗The name MUST match the name of the file name (without .svg).
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

## ✨ Why This Beats Icon Libraries Everywhere

* **DX-first in dev**: No flicker. No sprite caching. Live updates.
* **Zero-runtime in production**: Sprites are native, fast, lightweight & highly Cached.
* **Only ships the icons you actually use** - smallest possible sprite.
* **Custom icon support**: Drop SVGs into `/public/zero-ui-icons/` and use `<CustomIcon />`


Made with ❤️ for the React community by [@austin1serb](https://github.com/austin1serb)

