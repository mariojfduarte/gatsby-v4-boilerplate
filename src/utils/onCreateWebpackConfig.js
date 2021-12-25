const path = require("path")

module.exports = ({ getConfig, actions }) => {
  if (getConfig().mode === "production") {
    actions.setWebpackConfig({
      devtool: false,
    })
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "../components/"),
        "@redux": path.resolve(__dirname, "../redux/"),
        "@utils": path.resolve(__dirname, "../utils/"),
        "@theme": path.resolve(__dirname, "../theme/"),
        "@copy": path.resolve(__dirname, "../intl"),
      },
      extensions: [".js", ".json", ".ts", ".tsx"],
    },
    node: {
      fs: "empty",
    },
  })
}
