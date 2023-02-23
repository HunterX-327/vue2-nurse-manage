import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

//引入路由插件
import VueRouter from 'vue-router';

//引入store
import store from "./store";

//引入路由
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)
//应用路由插件
Vue.use(VueRouter)


new Vue({
  render: h => h(App),
  store,
  router:router,
  //创建全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线，$bus就是当前应用的vm
  },
  devtools: true
}).$mount('#app')
