const { defineConfig } = require('@vue/cli-service')

const path = require('path')

function resolve(dir){
  return path.join(__dirname,dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  //关闭语法检查
  configureWebpack:{  //配置别名
    resolve:{
      alias:{
        '@':resolve('./src'),
        'style':resolve('@/style'),
      }
    }
  }
})