const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Jarvis = require("webpack-jarvis");
const CopyPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
var DashboardPlugin = require("webpack-dashboard/plugin");

const MiniCssExtract = env => {
  const prefix = "css/",
    settings = {
      filename: prefix + "cropper.min.css",
      chunkFilename: prefix + "[id].[hash].css"
    };

  return new MiniCssExtractPlugin(settings);
};

const HtmlWebpack = () => {
  const setting = {
    inject: "body",
    template: path.resolve(__dirname, "../../public/index.html"),
    title: "hello webpack"
  };
  return new HtmlWebpackPlugin(setting);
};

const Jarviss = () => new Jarvis();

const Copy = () =>
  new CopyPlugin([
    {
      from: path.resolve(__dirname, "../../public"),
      to: path.resolve(__dirname, "../../dist"),
      ignore: ["*.html"]
    }
  ]);

const VueLoader = () => new VueLoaderPlugin();

const Dashboard = () => new DashboardPlugin();

module.exports = {
  MiniCssExtract,
  HtmlWebpack,
  Jarviss,
  Copy,
  VueLoader,
  Dashboard
};
