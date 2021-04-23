const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (webpackConfig) => {
  // Avoid import all locale file of moment
  webpackConfig.output.filename="vadp-ai.js";
  webpackConfig.plugins.push(
    new ExtractTextPlugin('vadp-ai.css', {
      allChunks: true
    })
  )
  //webpackConfig.module.rules[2].use[1].options.minimize=true;

  webpackConfig.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/));
  webpackConfig.output = Object.assign({},webpackConfig.output,{
    library: 'vadpAi',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  });
  webpackConfig.externals = {
    react: {
      commonjs: 'react',
        commonjs2: 'react',
        amd: 'react',
        root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'react-dom',
        root: 'ReactDOM',
    },
  }

  // console.log(webpackConfig.plugins[7],"webpackConfig----")
  // console.log("-----------------------",webpackConfig.module.rules[1],)
  return webpackConfig;
};
