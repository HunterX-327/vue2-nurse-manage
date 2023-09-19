<template>
    <el-container class="master">
        <el-aside :style="asideStyle">
            <!-- main-navigation -->
            <MainNavVue></MainNavVue>
        </el-aside>
        <el-container>
            <!-- main-header -->
            <el-header class="el-header-main" style="padding-left: 10px;">
                <MainHeaderVue></MainHeaderVue>
            </el-header>

            <!-- tags-header -->
            <el-header class="el-header-tags" style="height:40px;padding: 0px;">
                <MainLabelVue></MainLabelVue>
            </el-header>

            <!-- main -->
            <el-main style="padding:5px;overflow: hidden;">
                <transition mode="out-in" name="fade" appear>
                    <router-view class="view"></router-view>
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

    export default {
        name: "App",
        components: { MainHeaderVue, MainLabelVue, MainNavVue },
        data() {
            return {
                //是否折叠
                isCollapse: false,

                //aside的style 由isCollapse控制
                asideStyle: {
                    width: "200px",
                },
            }
        },
        methods: {
            isCollapseAction(action) {
                console.log("我是app收到了", action);
                this.isCollapse = action;
            }
        },
        mounted() {
            //如果第一次进入该程序，则跳转到home，否则刷新也跳转到当前
            if (this.$route.path == "/") {
                this.$router.replace({
                    path: "/home",
                });
            }

            //绑定全局事件总线，用于接收Mainheader传来的折叠操作
            this.$bus.$on("isCollapseAction", this.isCollapseAction);
        },
        watch: {
            isCollapse(e) {
                if (e) {
                    this.asideStyle.width = "64px"
                } else {
                    this.asideStyle.width = "200px"
                }
            }
        }
    };
</script>

<style>
    body,
    html {
        height: 100%;
        margin: 0px;
        /* min-width: 950px; */
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

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.3s cubic-bezier(0.55, 0, 0.1, 1) !important;
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