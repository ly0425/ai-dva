const publicPath = '/';
export default {
  "entry": {
    "vadp-ai":"./src/index.js"
  },
  // "devtool": 'source-map',

  "disableCSSModules": true,
  "publicPath": publicPath,
  "output":{
    "filename":"vadp-ai.js",
    "chunkFilename":"vadp-ai.js"
  },
  "define": {
    "publicPath": publicPath,
    "siteName" : "望海数据分析平台",
  },
  "html": {
    "template": "./public/index.html"
  },
  "extraBabelPresets":["env","stage-0","es2015-ie","react",],
  "extraBabelIncludes":["node_modules/xlsx-populate","node_modules/echarts-for-react"],

  "extraBabelPlugins": [
    "transform-runtime",
    "transform-class-properties",
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "alias": {
          "~": "./src",
      "public":"./src/components/Public"
        }
      }
    ]
  ],
  "env": {
    "development": {
      "extraBabelPlugins": [
        "dva-hmr",
        "transform-class-properties",
      ]
    }
  },
  "externals": {
    "jquery": "$",
    "react": "React",
    "react-dom": "ReactDOM",
    "prop-types": "PropTypes",
    // "dva": "dva",
    "lodash":"_",
    "moment": "moment",
    "antd": "antd",
    "@vadp/ui": "vadpUI",
    "@vadp/admin": "vadpPortalAdmin",
    "@vadp/layouts": "vadpLayouts",
    // "@vadp/wf-designer": "WFDesigner",
    // "@vadp/workflow": "vadpWorkflow",
    "echarts": "echarts",
    // "axios": "axios",
    "css-loader": "css-loader",
  },
  "proxy": {
    "/sso": {
      "target": "http://localhost:8080/portal",
      "changeOrigin": true,
      "pathRewrite": { "^/sso": "" }
    },
    "/portal": {
      "target": "http://10.0.22.142:8030/vadpbi/",
      //"target": "http://localhost:8080/",
      "changeOrigin": true,
    },
    "/bi": {
      "target": "http://10.0.22.142:8030/vadpbi/",
     // "target": "http://localhost:9001/",
      "changeOrigin": true,
    },
    "/oesv4": {
      "target": "http://localhost:8888/",
      "changeOrigin": true,
      "pathRewrite": { "^/oesv4": "" }
    },
    "/authority":{
      "target": "http://localhost:9001/",
      "changeOrigin": true,
    },
    "/finance": {
      //"target": "http://192.168.248.61:8089/finance/",
       "target": "http://localhost:9001/",
      "changeOrigin": true,
    },
    "/api":{
      "target": "http://10.0.66.62:8180/",
      "changeOrigin": true,
    },


  },
  "ignoreMomentLocale": true,
  "theme": null,
  "hash": false
}
