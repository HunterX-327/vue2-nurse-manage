<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu ref="menu" background-color="#030000" text-color="#a9abaf" active-text-color="#F57D2D"
                class="el-menu-vertical-demo" :unique-opened="true" :default-active="defaultActive"
                :default-openeds="defaultOpeneds" :router="true" @open="handleOpen" @close="handleClose"
                :collapse="isCollapse" :collapse-transition="false">
                <div class="main-title">
                    <el-avatar :src="avatarSrc" shape="square"></el-avatar>
                    <h4 v-show="!isCollapse" style="pointer-events: none;">看护人员管理系统</h4>
                </div>
                <el-menu-item index="/home">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/importData">
                    <i class="el-icon-download"></i>
                    <span slot="title">数据导入</span>
                </el-menu-item>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-menu"></i>
                        <span>看护管理</span>
                    </template>
                    <el-menu-item index="/intoNurse">待转入看护</el-menu-item>
                    <el-menu-item index="/intoNurseManage">转入看护管理</el-menu-item>
                    <el-menu-item index="/assignNurse">外派看护</el-menu-item>
                    <el-menu-item index="/nurserRecord">看护记录</el-menu-item>
                </el-submenu>
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-s-custom"></i>
                        <span>人员信息</span>
                    </template>
                    <el-menu-item index="/personAll">全部</el-menu-item>
                    <el-menu-item index="/onJobPerson">在岗人员</el-menu-item>
                    <el-menu-item index="/caregivers">看护人员</el-menu-item>
                    <el-menu-item index="/employee">离职人员</el-menu-item>
                </el-submenu>
                <el-menu-item index="/locale">
                    <i class="el-icon-location-information"></i>
                    <span>地区设置</span>
                </el-menu-item>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-s-operation"></i>
                        <span>系统设置</span>
                    </template>
                    <el-menu-item index="/userManage">用户管理</el-menu-item>
                    <el-menu-item index="5-2" disabled>修改密码</el-menu-item>
                    <el-menu-item index="5-3" disabled>数据备份</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    import { mapActions, mapMutations, mapState, mapGetters } from "vuex";
    import avatar from "@/assets/avatar.jpg"
    export default {
        name: "MainNav",
        data() {
            return {
                keyIndex: "", //当前打开的submenu
                defaultActive: "", //默认路由界面
                defaultOpeneds: [],
                isCollapse: false, //是否折叠
                avatarSrc: avatar,
            };
        },
        mounted() {
            //页面挂载的时候 将当前路由path添加到defaultActive 展开submenu
            this.defaultActive = this.$route.path;
            // console.log(this.$route.path);

            //绑定全局事件总线 用于接收defaultActive  lab切换时展开
            this.$bus.$on("getDefaultActive", this.getDefaultActive);

            //绑定全局事件总线，用于接收Mainheader传来的折叠操作
            this.$bus.$on("isCollapseAction", this.isCollapseAction);
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
                // 只能一个submenu展开(暂时被unique - opened代替);
                // this.$refs.menu.close(this.keyIndex); // 关闭当前打开的submenu
                // this.keyIndex = key; // 将当前submuenuIndex值切换
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
                // this.keyIndex = ""; // 关闭之后赋给初值（空）
            },
            // handleSelect(key, keyPath) {
            //     console.log(key, keyPath);
            // },

            //借助mapActions调用生成对应方法，会调用dispatch去联系actions方法        
            ...mapActions("labelAbout", { addTag: "addTag" }),

            //拿到MainLabel组件path实时切换defaultActions
            getDefaultActive(value) {
                console.log("我是nav组件，我收到了label组件传来的数据", value);
                this.defaultActive = value;
            },

            //折叠操作
            isCollapseAction(action) {
                console.log("我是MainNav收到了", action);
                this.isCollapse = action;
            }
        },
        watch: {
            //监听route实施变化tags
            $route: {
                handler() {
                    console.log("路由切换：", this.$route);
                    //调用actions函数 添加tag标签
                    this.TagsValue = {
                        name: this.$route.meta,
                        path: this.$route.path,
                        type: "warning",
                    };
                    this.addTag(this.TagsValue);

                    //路由变化的时候改变defaultActive
                    this.defaultActive = this.$route.path;

                    //如果当前route为/home 则关闭当前submenu
                    if (this.$route.path == "/home") {
                        // console.log("@home");
                        this.defaultOpeneds = [];
                    }
                },
                // immediate: true,
            },
        },

        beforeDestroy() {
            this.$bus.$off("getDefaultActive");
        },
    };
</script>

<style scoped>
    ul.el-menu {
        border: none;
    }

    .main-title {
        height: 60px;
        background-color: #030000;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .main-title>h4 {
        margin: 0px;
        line-height: 60px;
        text-align: center;
        color: white;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        height: 100%;
    }
</style>