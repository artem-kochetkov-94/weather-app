const merge = require("webpack-merge");
const main = require("./config.main");

module.exports = merge(main, {
  mode: "development",

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  devServer: {
    host: "localhost",
    port: 8080
  }
});
