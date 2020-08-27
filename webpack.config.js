const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",

  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/dist"),
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(ttf|ico)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif|ico)$/i,
        use: {
          loader: "url-loader",
          options: {
            limit: 25000,
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new CopyPlugin({
      patterns: [{ from: "src/img", to: "img" }],
    }),
  ],

  devServer: {
    contentBase: path.join(__dirname, "/dist"),
    compress: true,
    port: 9000,
    open: "Google Chrome",
    overlay: true,
  },
};
