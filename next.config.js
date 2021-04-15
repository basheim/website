
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  images: {
    loader: "imgix",
    path: "",
  },
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/basheim/website/gh-pages/' : ''
}