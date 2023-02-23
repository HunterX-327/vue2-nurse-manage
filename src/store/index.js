//引入Vue
import Vue from "vue";

//引入Vuex
import Vuex from "vuex";

//引入tag标签配置
import labelOption from './label'
//引入importData配置
import importOption from './inportData'

//使用vuex
Vue.use(Vuex);


export default new Vuex.Store({
    modules:{
        labelAbout:labelOption,
        importAbout:importOption
    }
})