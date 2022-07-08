## **简述一下**这个模板给VSCode开发` uni-app`带来的体验

已经预置了`sass`、`sass-loader`、`uview-ui`，并做了**easycom**相关配置。
引入了全局的axios  request


- 增强`pages.json`和`manifest.json`开发体验（语法提示、颜色块、写注释）
- 一键创建页面、组件、分包
- 完善的`API`，组件，uni.scss语法提示
- 条件编译注释高亮


## 项目配置

![image-20220429134331265](https://s2.loli.net/2022/04/29/foQDHulNeEwhcAi.png)

## 运行项目

对应的命令在`package.json`，中，可以自行查看。

```bash
npm run dev: %PLATFORM%
```

## 发布项目

```bash
npm run build: %PLATFORM%
```     

`新增功能（以下功能均经过安卓打包测试）`

地图定位以及访问摄像头功能    
图片添加水印并且存储到本地相处    
百度语音交互，语音转文字，语音合成播报（app功能）    
拖拽排序    
本地SQLite
分享到朋友圈（没有添加微信的sdk）小程序目前不行    
拍照添加水印    
测试功能包含 上传图片添加水印    




