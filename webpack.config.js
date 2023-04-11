const path = require("path");
const htmlPlugin = require("html-webpack-plugin");
const htmlPluginConf = new htmlPlugin({
  filename: "index.html",
  template: "./src/index.html",
});

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
    filename: "JS/bundle.js",
    path: path.join(__dirname, "dist"),
    clean: true,
    assetModuleFilename: 'Assets/Img/[name][ext]',
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./dist"),
    },
    port: "3000",
    open: true,
  },
  plugins: [htmlPluginConf],
};
