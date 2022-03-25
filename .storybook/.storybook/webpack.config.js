const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const entryDir = '../../';

module.exports = ({ config }) => {

  config.resolve.extensions.push('.ts', '.tsx', '.vue', '.css', '.less', '.scss', '.sass', '.html');

  config.module.rules.push({
    test: /\.(ts)$/,
    exclude: /node_modules/,
    loader: 'ts-loader',
    options: {
      appendTsSuffixTo: [/\.vue$/],
      transpileOnly: true
    },
  });

  config.module.rules.push({
    test: /\.scss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"]
  });

  config.resolve.alias = {
    '@/components': path.resolve(__dirname, `${entryDir}/components`),
    '@/assets': path.resolve(__dirname, `${entryDir}/assets`),
    'vue$': 'vue/dist/vue.esm.js'
  }

  config.plugins.push(new ForkTsCheckerWebpackPlugin());

  return config;
};