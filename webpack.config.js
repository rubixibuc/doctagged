const nodeExternals = require('webpack-node-externals');
const path = require("path");

module.exports = {
  output: {
    library: 'doctagged',
    libraryTarget: 'umd',
    filename: 'doctagged.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [nodeExternals()]
}