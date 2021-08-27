const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    host: "127.0.0.1",
    port: 9000,
  },
};
