
const HelloCompilationPlugin = require("./webpack-plugin/helloworld.js");
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HelloCompilationPlugin()
  ]
};
