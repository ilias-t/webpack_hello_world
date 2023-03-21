const path = require("path");

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
        // scss
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
