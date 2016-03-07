var config = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/app'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw', exclude: /node_modules/ }
    ]
  }
};

module.exports = config;