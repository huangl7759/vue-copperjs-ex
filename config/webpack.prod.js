const merge = require("webpack-merge");
// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const {
  MiniCssExtract,
  HtmlWebpack,
  Copy,
  Dashboard,
  VueLoader
} = require("./plugins/index");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  // plugins: [MiniCssExtract(), HtmlWebpack(), Copy(), VueLoader()]
  plugins: [MiniCssExtract(), VueLoader()]
});
