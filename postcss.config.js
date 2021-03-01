module.exports = {
  plugins:{
    autoprefixer:{},
    'postcss-px-to-viewport':{
      viewportWidth: 375,   // ihone6视窗的宽度，对应的是设计稿的宽度一般是750
      viewportHeight: 667, // 视窗的高度，根据750设备的宽度来指定，一般指定1334，也可以不配置
      unitPrecision: 3,     // 指定`px`转换为视窗单位值的小数位数
      viewportUnit: "vw",   //指定需要转换成的视窗单位，建议使用vw
      selectorBlackList: ['ignore','tab-bar','tab-bar-item','cart-bottom-bar'],// 指定不转换为视窗单位的类，可以自定义，可以无限添加
      minPixelValue: 1,     // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false     // 是否允许在媒体查询中转换`px`
      //exclude: [/TabBar/],//必须是正则，匹配文件的，不想让其转换
    }
  }
}