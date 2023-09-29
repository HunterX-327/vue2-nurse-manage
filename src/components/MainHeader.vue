<template>
    <el-row type="flex" justify="space-between">
        <el-col :span="6">
            <el-row justify="start" style="min-width: 180px;">
                <el-col :span="2" style="font-size:25px;min-width: 30px;">
                    <i :class="foldClass" style="color:white; cursor: pointer;" @click="handleCollapse()"></i>
                </el-col>
                <el-col :span="14" style="min-width: 110px;">
                    <span
                        style="color:white;font-size:20px;user-select: none;padding-left: 10px;font-weight: 700;">基础设置</span>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="6">
            <el-row type="flex" justify="end">
                <el-col :span="3" style="text-align: center;min-width: 40px;">
                    <el-badge is-dot style="line-height:20px;font-size: 20px;">
                        <i class="el-icon-bell" style="color:white;cursor: pointer;"></i>
                    </el-badge>
                </el-col>
                <el-col :span="3" style="text-align: center;min-width: 40px;">
                    <div style="font-size:20px">
                        <i class="el-icon-user-solid"
                            style="color:030000;background-color: white;border-radius: 50%;padding: 2px;cursor: pointer;"></i>
                    </div>
                </el-col>
                <el-col :span="8" style="text-align: center; min-width: 110px;">
                    <el-dropdown style="line-height:20px" trigger="click">
                        <span class="el-dropdown-link"
                            style="font-weight: 700;color: white;user-select: none; cursor: pointer;">
                            VGhunter
                            <i class="el-icon-arrow-down el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>账户</el-dropdown-item>
                            <el-dropdown-item>设置</el-dropdown-item>
                            <el-dropdown-item disabled>管理员系统</el-dropdown-item>
                            <el-dropdown-item divided>退出系统</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "MainHeader",
        props: ['isLess'],
        data() {
            return {
                isCollapse: false,

                //折叠按钮切换
                foldClass: {
                    "el-icon-s-fold": true,
                    "el-icon-s-unfold": false,
                }
            }
        },

        methods: {
            handleCollapse() {
                console.log("折叠");
                this.isCollapse = !this.isCollapse;
                this.$bus.$emit("isCollapseAction", this.isCollapse);  //同步isCollapse
                this.$bus.$emit("isLessAction", this.isCollapse); //同步isLess;
            }
        },

        watch: {
            isCollapse(newValue) {
                if (newValue) {
                    this.foldClass["el-icon-s-fold"] = false;
                    this.foldClass["el-icon-s-unfold"] = true;
                } else {
                    this.foldClass["el-icon-s-fold"] = true;
                    this.foldClass["el-icon-s-unfold"] = false;
                }
            },

            //监听isLess看是否需要改变图标
            isLess(newValue) {
                if (newValue) {
                    this.foldClass["el-icon-s-fold"] = false;
                    this.foldClass["el-icon-s-unfold"] = true;
                    this.isCollapse = newValue;
                } else {
                    this.foldClass["el-icon-s-fold"] = true;
                    this.foldClass["el-icon-s-unfold"] = false;
                    this.isCollapse = newValue;
                }
            }
        }
    };
</script>

<style scoped>
    .el-header,
    .el-aside {
        background-color: #030000;
    }

    .el-icon-s-fold:hover,
    .el-icon-s-unfold:hover {
        color: #e6a23c !important;
    }
</style>