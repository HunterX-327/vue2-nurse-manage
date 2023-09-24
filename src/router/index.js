
//用于解决重复路由跳转的报错
// //获取原型对象上的push函数
// const originalPush = VueRouter.prototype.push
// //修改原型对象中的push方法
// VueRouter.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }


//引入路由
import VueRouter from "vue-router";

//引入组件
import Home from '../pages/home/Home.vue'

import  ImportData from '../pages/importData/ImportData.vue'

import  AssignNurse from '../pages/nurse/AssignNurse.vue'
import  IntoNurse from '../pages/nurse/IntoNurse.vue'
import  IntoNurseManage from '../pages/nurse/IntoNurseManage.vue'
import  NurseRecord from '../pages/nurse/NurseRecord.vue'

import  Dismissed from '../pages/personInfo/Dismissed'
import  OnJobPerson from '../pages/personInfo/OnJobPerson'
import  PersonAll from '../pages/personInfo/PersonAll'

import  Locale from '../pages/locale/Locale.vue'

import  UserManage from '../pages/setting/UserManage.vue'

//使用并暴露路由
export default new VueRouter({
    routes:[
        //首页路由
        {
            path:"/home",
            meta:"首页",
            component:Home,
        },
        //数据导入路由
        {
            path:"/importData",
            meta:"数据导入",
            component:ImportData
        },
        //看护管理路由
        // {
        //     path:"/nurse",
        //     children:[
                
        //     ]
        // },
        {
            path:'/intoNurse', //待转入看护
            meta:"待转入看护",
            component:IntoNurse,
        },
        {
            path:'/intoNurseManage', //转入看护管理
            meta:'转入看护管理' ,
            component:IntoNurseManage,
        },
        {
            path:'/assignNurse', // 外派看护
            meta:"外派看护" ,
            component:AssignNurse
        },
        {
            path:'/nurserRecord', // 看护记录
            meta:"看护记录",
            component:NurseRecord
        },
        //人员信息
        // {
        //     path:"/personInfo",
        //     children:[

        //     ]
        // },

        {
            path:'/personAll', //全部
            meta:"人员信息全部",
            component:PersonAll,
        },
        {
            path:'/onJobPerson', //在岗人员
            meta:"在岗人员",
            component:OnJobPerson,
        },
        {
            path:'/Dismissed',  // 离岗人员
            meta:"离岗人员",
            component:Dismissed,
        },

        //地区设置
        {
            path:"/locale",
            meta:"地区设置",
            component:Locale,
        },
        //系统设置
        // {
        //     path:'/setting',
        //     children:[
                
        //     ]
        // }

        {
            path:'/userManage', //用户设置
            meta:"用户管理",
            component:UserManage,
        }
    ]
})