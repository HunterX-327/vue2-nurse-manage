//引入Vue
import Vue from "vue";

//引入Vuex
import Vuex from "vuex";

//使用vuex
Vue.use(Vuex);

//准备actions--用于响应组件中的动作
const actions = {
    //添加tags并判断是否存在此tag
    addTag(context,value){
        // console.log("actions的addTag被调用了",context,value);
        
        // 使用some函数判断是否存在某个对象
        if(value.name !== '首页'){
            if(!context.state.tagData.some(item => item.name == value.name || item.path == value.path)){
                context.commit("ADDTAG",value);
            }
        }
    }
};
//准备mutations--用于操作数据（state）
const mutations = {
    //添加tag
    ADDTAG(state,value){
        // console.log("mutations被调用",state,value);
        state.tagData.push(value)
    },

    //删除tag
    REMOVETAG(state,value){
        state.tagData = state.tagData.filter((tag)=>{
            return tag.name != value.name;
        })
    }
};
//准备state--用于存储数据
const state = {
    tagData:[
        // { name: "首页", path:"/home", type: "warning" },
    ]
};

export default new Vuex.Store({
    actions,
    mutations,
    state,
})