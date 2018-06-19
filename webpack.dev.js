/* eslint-env node */

const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = merge(common, {});

module.exports = merge(common, {
  optimization: {
    concatenateModules: true,
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // this does not seem to work?
        extractComments: true, // although this creates a separate app.js.LICENSE file, the app.js size stays the same
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: {
          // Processor thinks Roboto is unused, because there is no other stylesheet
          // that would use it and it doesn't pick up material-ui's declarations.
          discardUnused: false,
        },
      }),
    ],
  },
});
