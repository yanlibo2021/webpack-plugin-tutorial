
const helloworld = require("./webpack-plugin/helloworld.js");
module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new helloworld({
      message: "my first webpack plugin"
    })
  ]
};
