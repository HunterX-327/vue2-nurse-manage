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
                <MainVue></MainVue>
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
        data() {
            return {
                /* 重新设置 */
                formData: {
                    //搜索和选择部门数据
                    department: "",
                    person: [
                        {
                            label: "张三",
                            value: "张三",
                        },
                        {
                            label: "张三",
                            value: "张三",
                        },
                    ],
                    nurseDate: "",
                    search: "",
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
                        name: "张三",
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
        mixins: [dataHandle]
    };
</script>

<style scoped src="./assets/style.css"></style>

<style scoped>
</style>