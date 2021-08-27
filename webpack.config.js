const path = require("path");
const WEBPACK = require("webpack");
const { merge } = require("webpack-merge");
const HTML_WEBPACK_PLUGIN = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const terserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpack_dev_server = require("./webpack.dev");
const webpack_prod_server = require("./webpack.prod");
const preset = require("./build-utils/presets");

const buildProgress = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage, message, ...args);
};

module.exports = (
  { presets = ["sass", "analyze", "compression"] },
  { mode }
) => {
  const plugins = [
    new HTML_WEBPACK_PLUGIN({
      template: path.resolve(__dirname, "src/template/index.html"),
    }),
    new MiniCssExtractPlugin({
      filename: "bundle.[contenthash].css",
    }),
    new CleanWebpackPlugin(),
  ];

  if (mode === "production") {
    plugins.push(new WEBPACK.ProgressPlugin(buildProgress));
    plugins.push(new terserPlugin());
  }

  const modeSpecificConfig =
    mode === "development" ? webpack_dev_server : webpack_prod_server;
  const devtool = mode === "development" ? "source-map" : "hidden-source-map"; // Helps in build time >> Sources >> Dir Structure

  return merge(
    {
      mode,
      entry: path.resolve(__dirname, "src/entry.js"),
      plugins,
      module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test: /\.jpe?g$/,
            type: "asset/resource",
          },
        ],
      },
      devtool,
      resolve: {
        alias: {
          assets: path.resolve(__dirname, "src/assets"),
        },
      },
    },
    modeSpecificConfig,
    preset({ mode, presets })
  );
};

// We can parse images w/o using url loader or file-loader just by using asset modules provided bu from Version 5

// {
//   test: /\.jpe?g$/,
//   use: [
//     {
//       loader: "url-loader",
//       options: {
//         limit: 5000,
//       },
//     },
//   ],
// },
