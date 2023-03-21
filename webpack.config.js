const path = require("path");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");

module.exports = {
  mode: process.NODE_ENV || "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "blammo.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin.BundleAnalyzerPlugin()],
};
