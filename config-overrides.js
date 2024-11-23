// const {
//     override,
//     addWebpackModuleRule,
//     adjustStyleLoaders,
//     addWebpackPlugin,
//     babelInclude,
//     addBabelPresets,
//     addBabelPlugins
//     // tap,
//   } = require('customize-cra')

//   const CSS_MODULE_LOCAL_IDENT_NAME = '[local]'


//   const adjustStyleLoader = rule => {
//     const sassModuleReg = /\.(scss|sass)$/
  
//     if (rule.test.toString() === sassModuleReg.toString()) {
//       rule.use[1].options.modules = {
//         localIdentName: CSS_MODULE_LOCAL_IDENT_NAME,
//       }
//     }
//   }

//   console.log(adjustStyleLoaders(adjustStyleLoader))
// module.exports = {
//     webpack: override(adjustStyleLoaders(adjustStyleLoader))
// }




// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// module.exports = function override(config, env) {
//     //do stuff with the webpack config...
//     config.plugins = [...config.plugins, new BundleAnalyzerPlugin()]
//     return config;
//   }
