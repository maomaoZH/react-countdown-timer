var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/CountdownTimer.jsx",
  output: {
    path: path.resolve("lib"),
    filename: "CountdownTimer.jsx",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: "babel-loader"
      }
    ]
  }
};
