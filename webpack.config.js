const path = require('path');

module.exports = {
  entry: './public/js/ahorcado.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};