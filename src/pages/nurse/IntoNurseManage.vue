<template>
    <!-- 转入看护管理 -->
    <el-card style="height:100%;box-sizing: border-box;">
        <el-container>
            <!-- 头部部分 -->
            <el-header>
                <HeaderVue pageName="IntoNurseManage" :formData="formData">
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
                    <el-table-column prop="nurseDays" label="已看护天数" align="center" width="80">
                        <template slot-scope="scope">{{ scope.row.nurseDays + "天"}}</template>
                    </el-table-column>
                    <el-table-column prop="stagger" label="轮休总天数" align="center" width="80">
                        <template slot-scope="scope">{{ scope.row.stagger + "天" }}</template>
                    </el-table-column>
                    <el-table-column label="操作" align="center" fixed="right" width="300">
                        <el-button type="text" icon="el-icon-user" size="mini" style="color:red">结束看护</el-button>
                        <el-button type="text" icon="el-icon-user" size="mini" style="color:orange">调转</el-button>
                        <el-button type="text" icon="el-icon-user" size="mini" style="color:greenyellow">休假</el-button>
                        <el-button type="text" icon="el-icon-view" size="mini">详情</el-button>
                    </el-table-column>
                </MainVue>
            </el-main>

            <!-- 底部分页 -->
            <el-footer>
                <FooterVue :totalSize="totalSize" :tableData="tableData" @changePage="changePage"
                    @changeSize="changeSize">
                </FooterVue>
            </el-footer>
        </el-container>
    </el-card>
</template>

<script>
    /* 导入组件和混合 */
    import { dataHandle } from "./assets/mixins";
    import HeaderVue from "./components/Header.vue";
    import FooterVue from "./components/Footer.vue";
    import MainVue from "./components/Main.vue";
    import HeaderLeftVue from "./components/HeaderLeft.vue";

    export default {
        name: "IntoNurseManage",
        components: { FooterVue, HeaderVue, MainVue, HeaderLeftVue },
        mixins: [dataHandle],
        data() {
            return {
                total: [
                    {
                        name: "张三",
                        age: 22,
                        phone: 18879715250,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 10,
                        stagger: 2,
                    },
                    {
                        name: "黄子睿",
                        age: 22,
                        phone: 18879715250,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 10,
                        stagger: 2,
                    },
                    {
                        name: "刘华强",
                        age: 22,
                        phone: 18879715250,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 10,
                        stagger: 2,
                    },
                    {
                        name: "陈冠希",
                        age: 22,
                        phone: 18879715250,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 10,
                        stagger: 2,
                    },
                    {
                        name: "张大大",
                        age: 22,
                        phone: 18879715250,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 10,
                        stagger: 2,
                    },
                    {
                        name: "刘备",
                        age: 22,
                        phone: 18879715250,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 10,
                        stagger: 2,
                    },
                    {
                        name: "陈泽锋",
                        age: 22,
                        phone: 18879715250,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 10,
                        stagger: 2,
                    },
                    {
                        name: "刘德华",
                        age: 22,
                        phone: 18879715250,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 10,
                        stagger: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 22,
                        phone: 18879715250,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 10,
                        stagger: 2,
                    },
                    {
                        name: "张三",
                        age: 22,
                        phone: 18879715250,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 10,
                        stagger: 2,
                    },
                    {
                        name: "张三",
                        age: 22,
                        phone: 18879715250,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 10,
                        stagger: 2,
                    },
                    {
                        name: "张三",
                        age: 22,
                        phone: 18879715250,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 10,
                        stagger: 2,
                    },
                ],
            };
        },
    };
</script>


<style scoped src="./assets/style.css">
    /* 导入nurse公共样式 */
    /* 可以使用这个方式导入，但是会影响全局，切使用:deep无效，所以如果需要使用，需要在组件中定义唯一类名 */
    /* @import url("./assets/style.css"); */
</style>


<style>
    /* 其他样式 */
</style>