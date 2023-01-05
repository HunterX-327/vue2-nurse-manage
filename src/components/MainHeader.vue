<template>
    <el-row type="flex" justify="space-between">
        <el-col :span="6">
            <el-row justify="center">
                <el-col :span="4" style="font-size:25px">
                    <i class="el-icon-s-fold" style="color:white"></i>
                </el-col>
                <el-col :span="20">
                    <span style="color:white;font-size:20px">基础设置</span>
                </el-col>
            </el-row>
        </el-col>
        <el-col :span="6">
            <el-row type="flex" justify="end">
                <el-col :span="4">
                    <el-badge is-dot style="line-height:20px;font-size: 20px;">
                        <i class="el-icon-bell" style="color:white"></i>
                    </el-badge>
                </el-col>
                <el-col :span="4">
                    <div style="font-size:20px">
                        <i
                            class="el-icon-user-solid"
                            style="color:030000;background-color: white;border-radius: 50%;padding: 2px;"
                        ></i>
                    </div>
                </el-col>
                <el-col :span="10">
                    <el-dropdown style="line-height:20px" trigger="click">
                        <span
                            class="el-dropdown-link"
                            style="font-weight: 700;color: white;padding-left: 10px;"
                        >
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
};
</script>

<style scoped>
.el-header,
.el-aside {
    background-color: #030000;
}
</style>
