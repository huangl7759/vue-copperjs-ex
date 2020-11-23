const merge = require("webpack-merge");
const path = require("path");

// const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const {
  MiniCssExtract,
  VueLoader
} = require("./plugins/index");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  output: {
    library: 'MCopper',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, "../dist"),
    filename: "vue-cropper.common.js",

  },
  optimization: {
    minimize: true
  },
  // plugins: [MiniCssExtract(), HtmlWebpack(), Copy(), VueLoader()]
  plugins: [MiniCssExtract(), VueLoader()]
});
