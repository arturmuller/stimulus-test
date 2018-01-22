const path = require("path");

const entry = {
  app: "./app/index.js",
};

const output = {
  filename: "[name].js",
  path: path.resolve("server/js"),
};

const devtool = "source-map";

module.exports = {
  entry,
  output,
  devtool,
};
