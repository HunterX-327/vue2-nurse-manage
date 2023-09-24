<template>
    <!-- 看护管理界面 -->
    <el-card style="height:100%;box-sizing: border-box;">
        <el-container>
            <!-- header部分 -->
            <el-header>
                <HeaderVue pageName="NurseRecord" :formData="formData"></HeaderVue>
            </el-header>

            <!-- 主要表格 -->
            <el-main>
                <MainVue :tableData="tableData">
                    <el-table-column prop="name" label="名字" width="60" align="center"></el-table-column>
                    <el-table-column prop="position" label="职位" align="center"></el-table-column>
                    <el-table-column prop="nurseDate" label="看护日期" align="center"></el-table-column>
                    <el-table-column prop="nurseDays" label="看护天数" align="center"></el-table-column>
                    <el-table-column prop="stagger" label="轮休天数" align="center"></el-table-column>
                    <el-table-column prop="assignLocal" label="派出地" align="center"></el-table-column>
                    <el-table-column label="操作" fixed="right" align="center" width="200">
                        <el-button type="text" icon="el-icon-view" size="mini">详情</el-button>
                        <el-button type="text" icon="el-icon-write" size="mini">编写</el-button>
                        <el-button type="text" icon="el-icon-delete" size="mini" style="color: red;">删除</el-button>
                    </el-table-column>
                </MainVue>
            </el-main>

            <!-- footer部分 -->
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
        name: "NurseRecord",
        /* 注册组件 */
        components: { HeaderVue, MainVue, FooterVue },
        mixins: [dataHandle],
        data() {
            return {
                /* 重新设置 */
                formData: {
                    //搜索和选择部门数据
                    department: "",
                    person: [],
                    nurseDate: "",
                    search: "",
                    personChoose: "",
                },

                total: [
                    {
                        name: "张三",
                        position: "市特巡警支队民警",
                        local: "永修基地",
                        nurseDate: "2022/12/10~2022/12/15",
                        nurseDays: 5,
                        stagger: 2,
                        assignLocal: "市本级",
                    },
                    {
                        name: "李四",
                        position: "市特巡警支队民警",
                        local: "永修基地",
                        nurseDate: "2022/12/10~2022/12/15",
                        nurseDays: 5,
                        stagger: 2,
                        assignLocal: "市本级",
                    },
                    {
                        name: "李小龙",
                        position: "市特巡警支队民警",
                        local: "永修基地",
                        nurseDate: "2022/12/10~2022/12/15",
                        nurseDays: 5,
                        stagger: 2,
                        assignLocal: "市本级",
                    },
                    {
                        name: "张三",
                        position: "市特巡警支队民警",
                        local: "永修基地",
                        nurseDate: "2022/12/10~2022/12/15",
                        nurseDays: 5,
                        stagger: 2,
                        assignLocal: "市本级",
                    },
                    {
                        name: "王老五",
                        position: "市特巡警支队民警",
                        local: "永修基地",
                        nurseDate: "2022/12/10~2022/12/15",
                        nurseDays: 5,
                        stagger: 2,
                        assignLocal: "市本级",
                    },
                    {
                        name: "王老五",
                        position: "市特巡警支队民警",
                        local: "永修基地",
                        nurseDate: "2022/12/10~2022/12/15",
                        nurseDays: 5,
                        stagger: 2,
                        assignLocal: "市本级",
                    },
                    {
                        name: "王老五",
                        position: "市特巡警支队民警",
                        local: "永修基地",
                        nurseDate: "2022/12/10~2022/12/15",
                        nurseDays: 5,
                        stagger: 2,
                        assignLocal: "市本级",
                    },
                ]
            }
        },

        computed: {
            personOptions: function () {
                // return [...new Set(this.total.map(item => item.name))].map(name => ({ label: name, value: name }))
                return new Array(...new Set(this.total.map(item => item.name))).map(name => ({ label: name, value: name }));
            }
        },

        watch: {
            //监听人员选择
            personOptions: {
                immediate: true,
                handler(newValue) {
                    this.formData.person = newValue;
                }
            },
        },

        mounted() {
            // console.log(new Array(...new Set(this.total.map(item => item.name))).map(name => ({ label: name, value: name })));
        },
    };
</script>

<style scoped src="./assets/style.css"></style>

<style scoped>
</style>