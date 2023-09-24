<template>
    <el-card style="height:100%;box-sizing: border-box;">
        <el-container>
            <!-- 头部部分 -->
            <el-header>
                <HeaderVue pageName="AssignNurse" :formData="formData">
                </HeaderVue>
            </el-header>

            <!-- 主要表格 -->
            <el-main>
                <MainVue :tableData="tableData">
                    <el-table-column type="selection" width="50" align="center"></el-table-column>
                    <el-table-column type="index" label="序号" align="center"></el-table-column>
                    <el-table-column prop="name" label="名字" width="60" align="center"></el-table-column>
                    <el-table-column prop="age" label="年龄" width="60" align="center"></el-table-column>
                    <el-table-column prop="phone" label="手机号码" align="center"></el-table-column>
                    <el-table-column prop="position" label="职位" align="center"></el-table-column>
                    <el-table-column prop="local" label="看护地" align="center" :filters="localFilter"
                        :filter-method="filterHandler"></el-table-column>
                    <el-table-column prop="time" label="派出时间" align="center"></el-table-column>
                    <el-table-column prop="nurseDays" label="已看护天数" sortable align="center"></el-table-column>
                    <el-table-column prop="restDays" label="轮休天数" align="center"></el-table-column>
                    <el-table-column label="操作" align="center" fixed="right" width="100">
                        <el-button type="text" icon="el-icon-view" size="mini">详情</el-button>
                    </el-table-column>
                </MainVue>
            </el-main>

            <!-- footer部分 -->
            <el-footer>
                <FooterVue :totalSize="totalSize" @changePage="changePage" @changeSize="changeSize">
                </FooterVue>
            </el-footer>
        </el-container>
    </el-card>
</template>

<script>
    /* 导入组件和mixins */
    import { dataHandle } from "./assets/mixins";
    import HeaderVue from "./components/Header.vue";
    import FooterVue from "./components/Footer.vue";
    import MainVue from "./components/Main.vue";
    import HeaderLeftVue from "./components/HeaderLeft.vue";

    export default {
        name: 'AssignNurse',
        components: { FooterVue, HeaderVue, MainVue, HeaderLeftVue },
        mixins: [dataHandle],
        data() {
            return {
                total: [
                    {
                        name: "李小龙",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "湖口县",
                        time: "2022-08-01",
                        nurseDays: 1,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 6,
                        restDays: 2,
                    },
                    {
                        name: "周杰伦",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "彭泽县",
                        time: "2022-08-01",
                        nurseDays: 2,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "共青城",
                        time: "2022-08-01",
                        nurseDays: 12,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "九江市区",
                        time: "2022-08-01",
                        nurseDays: 10,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 12,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "九江市区",
                        time: "2022-08-01",
                        nurseDays: 32,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "永修县",
                        time: "2022-08-01",
                        nurseDays: 52,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "共青城",
                        time: "2022-08-01",
                        nurseDays: 2,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "共青城",
                        time: "2022-08-01",
                        nurseDays: 12,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 1,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "共青城",
                        time: "2022-08-01",
                        nurseDays: 12,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 11,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "湖口县",
                        time: "2022-08-01",
                        nurseDays: 12,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "修水县",
                        time: "2022-08-01",
                        nurseDays: 12,
                        restDays: 2,
                    },
                    {
                        name: "张柏芝",
                        age: 1,
                        phone: 18816483725,
                        position: "修水县特警",
                        local: "湖口县",
                        time: "2022-08-01",
                        nurseDays: 12,
                        restDays: 2,
                    },
                ]
                ,
            }
        },
        computed: {
            localFilter() { //地点选项筛选
                // //获取所有local
                // let localAll = [];
                // this.total.forEach(item => {
                //     localAll.push(item.local);
                // })

                // localAll = new Set(localAll)

                // //筛选的数组
                // let filter = [];
                // localAll.forEach(item => {
                //     let n = { text: item, value: item }
                //     filter.push(n);
                // })
                // return filter;

                return [...new Set(this.total.map(item => item.local))].map(local => ({ text: local, value: local }));
            }
        },
        methods: {
            //地址筛选
            filterHandler(value, row, column) {
                const property = column['property']  //获取列的名字
                console.log(property);
                // console.log(row[property]);
                return row[property] === value;
            }
        },
    };
</script>

<style scoped src="./assets/style.css">
    /* 导入nurse公共样式 */
    /* 可以使用这个方式导入，但是会影响全局，切使用:deep无效，所以如果需要使用，需要在组件中定义唯一类名 */
    /* @import url("./assets/style.css"); */
</style>

<style>
</style>