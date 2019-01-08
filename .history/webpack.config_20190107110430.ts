import * as path from "path";
import * as webpack from "webpack";
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const config: webpack.Configuration = {
  mode: "production",
  entry: "./foo.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "foo.bundle.js"
  }
};

export default config;

// module.exports = {
//   entry: "./src/index.tsx",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "dist")
//   },

//   resolve: {
//     // Add '.ts' and '.tsx' as resolvable extensions.
//     extensions: [".ts", ".tsx", ".js", ".json"]
//   },

//   module: {
//     rules: [
//       // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
//       { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
//     ]
//   },
//   plugins: [htmlPlugin]
// };
