const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "json-loader",
      templateContent: `<h1>json-loader</h1><ul id="logger"></ul>`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.fjs$/,
        use: [
          {
            loader: path.resolve(__dirname, "./src/json-loader.js"),
            options: {},
          },
        ],
      },
    ],
  },
};
