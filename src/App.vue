<template>
    <el-container class="master">
        <el-aside :style="asideStyle">
            <!-- main-navigation -->
            <MainNavVue :isLess="isLess"></MainNavVue>
        </el-aside>
        <el-container>
            <!-- main-header -->
            <el-header class="el-header-main" style="padding-left: 10px; min-width: 500px;">
                <MainHeaderVue :isLess="isLess"></MainHeaderVue>
            </el-header>

            <!-- tags-header -->
            <el-header class="el-header-tags" style="height:40px;padding: 0px; min-width: 500px;">
                <MainLabelVue></MainLabelVue>
            </el-header>

            <!-- main -->
            <el-main style="padding:5px;overflow: auto;" ref="mainContent">
                <transition mode="out-in" name="fade" appear>
                    <router-view class="view" style="min-width: 1100px;"></router-view>
                </transition>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    import MainHeaderVue from "./components/MainHeader.vue";
    import MainLabelVue from "./components/MainLabel.vue";
    import MainNavVue from "./components/MainNav.vue";
    import "animate.css";
    import _ from 'lodash'

    export default {
        name: "App",
        components: { MainHeaderVue, MainLabelVue, MainNavVue },
        data() {
            return {
                //是否折叠
                isCollapse: false,
                //宽度是否小于1000px
                isLess: false,

                //aside的style 由isCollapse控制
                asideStyle: {
                    width: "200px",
                },
            }
        },
        methods: {
            isCollapseAction(action) {
                console.log("收到isCollapse", action);
                this.isCollapse = action;
            },

            isLessAction(action) {
                console.log("收到less", action);
                this.isLess = action;
            }
        },
        mounted() {
            console.log("当前路由", this.$route.path);

            //如果第一次进入该程序，则跳转到home，否则刷新也跳转到当前
            if (this.$route.path == "/") {
                this.$router.replace({
                    path: "/home",
                });
            }

            //绑定全局事件总线，用于接收Mainheader传来的折叠操作
            this.$bus.$on("isCollapseAction", this.isCollapseAction);

            //绑定全局事件，姐搜mainHeader和mainNav修改less
            this.$bus.$on("isLessAction", this.isLessAction)


            //窗口小于1000时收回aside,再触发MainNav的:collapse
            window.addEventListener("resize", _.debounce(() => {
                if (window.innerWidth < 1000) {
                    this.isLess = true;
                    this.asideStyle.width = '60px'
                } else {
                    this.isLess = false;
                    this.asideStyle.width = '200px'
                }
            }, 100))

        },
        watch: {
            isCollapse(e) {
                if (e) {
                    this.asideStyle.width = "64px"
                } else {
                    this.asideStyle.width = "200px"
                }
            }
        },
        beforeDestroy() {
        },
    };
</script>

<style>
    body,
    html {
        height: 100%;
        margin: 0px;
        /* min-width: 950px; */
        overflow: hidden;
    }

    .master {
        height: 100%;
    }

    .el-card {
        height: 100%;
        box-sizing: border-box;
    }

    .el-card .el-card__body {
        padding: 2px;
        box-sizing: border-box;
    }

    .el-header-main,
    .el-aside {
        background-color: #030000;
    }

    .el-header-main {
        line-height: 60px;
    }

    .el-header-tags {
        line-height: 40px;
        border-bottom: 1px solid rgb(151, 151, 151);
    }

    .fade-enter,
    .fade-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }

    /* .view {
    transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1) !important;
} */

    /* :root {
    --animate-duration: 0.6s !important;
} */


    .fade-leave-active {
        transition: all 0.1s cubic-bezier(0.55, 0, 0.1, 1) !important;
    }

    .fade-enter-active {
        transition: all 0.2s cubic-bezier(0.55, 0, 0.1, 1) !important;
    }


    .fade-enter-to,
    .fade-leave {
        transform: translateX(0);
        opacity: 1;
    }

    .el-aside {
        width: 200px;
        transition: 0.3s ease-in-out;
        overflow-x: hidden !important;
    }
</style>