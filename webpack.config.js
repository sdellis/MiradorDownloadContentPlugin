const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'MiradorDownloadContentPlugin',
    libraryExport: 'default'
  },
  //devtool: 'inline-source-map',
  plugins: [ new BundleAnalyzerPlugin() ],
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      '@ProjectMirador/mirador': path.resolve(__dirname, './node_modules/@ProjectMirador/mirador'),
    }
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    '@ProjectMirador/mirador': {
      commonjs: "@ProjectMirador/mirador",
      commonjs2: "@ProjectMirador/mirador",
      amd: "@ProjectMirador/mirador",
      root: "@ProjectMirador/mirador"
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
