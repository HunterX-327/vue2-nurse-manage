<template>
    <el-card style="height:100%;box-sizing: border-box;">
        <el-container>
            <!-- 头部部分 -->
            <el-header>
                <HeaderVue pageName="IntoNurse">
                    <template slot="HeaderLeft">
                        <HeaderLeftVue :formData="formData"></HeaderLeftVue>
                    </template>
                </HeaderVue>
            </el-header>

            <!-- 主要表格 -->
            <el-main>
                <MainVue :tableData="tableData">
                    <el-table-column type="selection" width="50" align="center"></el-table-column>
                    <el-table-column type="index" label="序号" align="center"></el-table-column>
                    <el-table-column prop="name" label="名字" width="60" align="center"></el-table-column>
                    <el-table-column prop="age" label="年龄" width="60" align="center"></el-table-column>
                    <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
                    <el-table-column prop="position" label="职位" align="center"></el-table-column>
                    <el-table-column prop="local" label="派出地" align="center"></el-table-column>
                    <el-table-column prop="time" label="派出时间" align="center"></el-table-column>
                    <el-table-column label="操作" align="center" fixed="right" width="300">
                        <el-button
                            type="text"
                            icon="el-icon-user"
                            size="mini"
                            style="color:orange"
                        >接受看护</el-button>
                        <el-button type="text" icon="el-icon-user" size="mini" style="color:red">退回</el-button>
                        <el-button type="text" icon="el-icon-view" size="mini">详情</el-button>
                    </el-table-column>
                </MainVue>
            </el-main>

            <!-- 底部分页 -->
            <el-footer>
                <FooterVue
                    :totalSize="totalSize"
                    :tableData="tableData"
                    @changePage="changePage"
                    @changeSize="changeSize"
                ></FooterVue>
            </el-footer>
        </el-container>
    </el-card>
</template>

<script>
// import "animate.css";
import { dataHandle } from "./assets/mixins";
import HeaderVue from "./components/Header.vue";
import FooterVue from "./components/Footer.vue";
import MainVue from "./components/Main.vue";
import HeaderLeftVue from "./components/HeaderLeft.vue";

export default {
    name: "IntoNurse",
    components: { FooterVue, HeaderVue, MainVue, HeaderLeftVue },
    data() {
        return {
            //当前界面的所有数据 可以统括ajax获取
            total: [
                {
                    name: "张柏芝",
                    age: 1,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "黄子韬",
                    age: 2,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "刘备",
                    age: 3,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "张小峰",
                    age: 4,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "刘志豪",
                    age: 5,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "陈冠希",
                    age: 6,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "赵丽颖",
                    age: 7,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "黄子睿",
                    age: 8,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "陈泽锋",
                    age: 9,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "张大大",
                    age: 10,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "刘德华",
                    age: 11,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "刘华强",
                    age: 12,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "张瑞文",
                    age: 13,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "黄晓明",
                    age: 14,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
                {
                    name: "欧阳娜娜",
                    age: 15,
                    phone: 18816483725,
                    position: "修水县特警",
                    local: "修水县",
                    time: "2022-08-01",
                },
            ],
        };
    },
    //封装在mixins的搜索函数
    mixins: [dataHandle],

    methods: {
        // // 每页size改变时触发
        // handleSizeChange(val) {
        //     this.pageSize = val;
        //     this.handleCurrentChange(this.currentPage);
        // },
        // //当前页改变时候触发
        // handleCurrentChange(val) {
        //     this.currentPage = val; //绑定当前页
        //     console.log(val);
        //     let start = (val - 1) * this.pageSize; //开始数据
        //     let end = start + this.pageSize; //结束数据
        //     console.log(start + "_" + end);
        //     if (this.formData.search == "") {
        //         console.log("空");
        //         this.totalSize = this.total.length;
        //         this.tableData = this.total.slice(start, end); //从总数据中筛选
        //     } else {
        //         this.totalSize = this.searchData.length;
        //         this.tableData = this.searchData.slice(start, end);
        //     }
        // },
    },

    mounted() {
        // console.log("我是intoNurse组件，我现在加载了");
        console.log(require("./assets/mixins"));
        console.log(require("@/assets/index").debounce.debounce());
    },
};
</script>

<style scoped src="./assets/style.css">
/* 可以使用这个方式导入，但是会影响全局，切使用:deep无效，所以如果需要使用，需要在组件中定义唯一类名 */
/* @import url("./assets/style.css"); */
</style> 