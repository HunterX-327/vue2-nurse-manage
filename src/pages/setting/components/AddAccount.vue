<!-- 增加用户的弹窗 -->
<template lang="">
    <el-dialog title="新增账号" :visible.sync="dialogVisible">
        <el-form :v-model="formData" labelPosition="right">
            <el-form-item label="账号类型" prop="accountType">
                <el-select v-model="formData.accountType" placeholder="账号类型">
                    <el-option label="管理员" value="admin"></el-option>
                    <el-option label="用户" value="user"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="用户名" prop="account">
                <el-input v-model="formData.account" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="formData.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="请再次输入密码">
                <el-input v-model="formData.confirmPassword" placeholder="请再次输入密码"></el-input>
            </el-form-item>
            <el-form-item label="是否启用账号">
                <el-select v-model="formData.isEnable">
                    <el-option label="启用" value="enable"></el-option>
                    <el-option label="禁用" value="unEnable"></el-option>
                </el-select>
            </el-form-item>
        </el-form>


        <span slot="footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="createHandle">立即创建</el-button>
        </span>
    </el-dialog>

</template>
<script>
    export default {
        name: 'AddAccountVue',
        // props: ["Visible"],
        data() {
            return {
                dialogVisible: false,
                formData: {
                    accountType: "",
                    account: "",
                    password: "",
                    confirmPassword: "",
                    isEnable: "enable",
                }
            }
        },
        methods: {
            createHandle() {
                console.log("创建操作");
                this.dialogVisible = false;
            }
        },
        watch: {
            /* props传递绑定到data中实时变化的方案，使用watch */
            Visible(newValue) {
                this.dialogVisible = newValue;
            }
        }
    }
</script>
<style lang="">

</style>