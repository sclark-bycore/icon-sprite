// next.config.mjs
export default {
  webpack(config, { dev }) {
    if (!dev) {
      config.plugins.push({
        apply(compiler) {
          compiler.hooks.beforeCompile.tapPromise("GenSprite", () => import("./scripts/index.js"))
        },
      })
    }
    return config
  },
}
