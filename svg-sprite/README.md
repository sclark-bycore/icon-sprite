# SVG Sprite Library

A TypeScript library for generating SVG sprites with React/TSX wrapper components.

## Usage

```bash
npm install
npm run build
```

## Structure

```
📂 svg-sprite/
│── 📂 dist
│   └── 📂 icons
│   │   |── Icon.js
│   │   |── Icon.d.ts
│   │   └── ** 1600 more icons **
│   │── config.js
│   │── config.d.ts
│   │── index.d.ts
│   └── index.js
│── 📂 scripts
│   │── build-sprite.js
│   │── gen-dist.js
│   │── gen-wrappers.js
│   │── index.js
│   │── scan-icons.js
│   └── used-icons.js
│── 📂 src
│   │── 📂 icons
│   │   │── Icon.jsx
│   │   └── ** 1600 more icons **
│   └── config.ts
│── README.md
│── package.json
└── tsconfig.json```