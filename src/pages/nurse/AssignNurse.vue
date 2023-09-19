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

                ]
            }
        }
    };
</script>

<style scoped src="./assets/style.css">
    /* 导入nurse公共样式 */
    /* 可以使用这个方式导入，但是会影响全局，切使用:deep无效，所以如果需要使用，需要在组件中定义唯一类名 */
    /* @import url("./assets/style.css"); */
</style>

<style>
</style>