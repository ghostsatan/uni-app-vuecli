module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
    },
  },
  devServer: {
    proxy: {
      "/api": {
        "target": "https://www.zhoukaiwen.com",
        "changeOrigin": true,//是否跨域
        "secure": false,// 设置支持https协议的代理
        "pathRewrite": { "^/api": "/" }
      },
      "/api": {
        "target": "https://restapi.amap.com/",
        "changeOrigin": true,//是否跨域
        "secure": false,// 设置支持https协议的代理
        "pathRewrite": { "^/api": "/" }
      }
    },
  },
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        static: "@/static",
        "@common": "src/common",
      },
    },
  },
  transpileDependencies: ["uview-ui"],
}
