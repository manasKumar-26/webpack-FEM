const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[contenthash].js",
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  devtool: "source-map",
};
