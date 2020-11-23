const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    // filename: "[name]/js/[name].[chunkhash].js",
    filename: "vue-cropper.common.js",
    publicPath: ""
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
        exclude: [path.resolve(__dirname, "../src/icons")]
      },
      {
        test: /\.svg$/,
        include: [path.resolve(__dirname, "../src/icons")],
        use: [
          {
            loader: 'svg-sprite-loader', options: { symbolId: 'icon-[name]' }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        exclude: /node_modules/
      }
    ]
  }
};
