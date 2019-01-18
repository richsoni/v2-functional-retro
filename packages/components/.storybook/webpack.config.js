module.exports = {
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'typed-css-modules-loader'
      },
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          emitErrors: true,
        }
      }
    ],

  }
}
