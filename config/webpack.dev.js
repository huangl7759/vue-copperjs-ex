const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const {
  MiniCssExtract,
  HtmlWebpack,
  Jarviss,
  VueLoader,
  Dashboard
} = require("./plugins/index");

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public"
  },
  plugins: [
    MiniCssExtract(),
    HtmlWebpack(),
    Jarviss(),
    VueLoader(),
    Dashboard()
  ]
});
