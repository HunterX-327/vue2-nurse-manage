<template lang="">
    <el-card>
        <div slot="header" class="clearfix">
            <strong>用户设置</strong>
        </div>
        <el-row style="display: flex; justify-content: space-between;">
            <el-col :span="16" style="flex-shrink: 1 !important; min-width: 700px; ">
                <el-form :model="formData" status-icon :rules="rules" ref="formData" label-width="100px">
                    <el-form-item label="账号" prop="account">
                        <el-input type="username" v-model="formData.account" disabled placeholder="user"></el-input>
                    </el-form-item>

                    <el-form-item label="当前密码" prop="password">
                        <el-input type="password" v-model="formData.password"></el-input>
                    </el-form-item>

                    <el-form-item label="新密码" prop="newPassword">
                        <el-input type="password" v-model="formData.newPassword"></el-input>
                    </el-form-item>

                    <el-form-item label="确认密码" prop="confirmPassword">
                        <el-input type="password" v-model="formData.confirmPassword"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary">立即修改</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <el-col :span="8" style="flex-shrink:10 !important;"></el-col>
        </el-row>
    </el-card>

</template>
<script>
    export default {
        name: "UserSetting",
        data() {
            var validateAccount = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('年龄不能为空'));
                }
                setTimeout(() => {
                    callback();
                })
            };

            var validatePassword = (rule, value, callback) => {
                if (value == "") {
                    callback(new Error('请输入密码'))
                } else {
                    callback();
                }
            };

            var validateNewPassword = (rule, value, callback) => {
                if (value == "") {
                    callback(new Error('请输入新密码'))
                } else {
                    if (this.formData.confirmPassword !== "") {
                        this.$refs.ruleForm.validateField('checkPass');
                    }
                    callback();
                }
            };

            var validateConfirmPassword = (rule, value, callback) => {
                if (value == "") {
                    callback(new Error('请再次输入密码'))
                } else if (this.newPassword != this.confirmPassword) {
                    callback(new Error('两次密码不一致'))
                }
                callback();
            }
            return {
                formData: {
                    account: "",
                    password: "",
                    newPassword: "",
                    confirmPassword: "",
                },
                rules: {
                    account: [
                        { validator: validateAccount, trigger: 'blur' }
                    ],
                    password: [
                        { validator: validatePassword, trigger: 'blur' }
                    ],
                    newPassword: [
                        { validator: validateNewPassword, trigger: 'blur' }
                    ],
                    confirmPassword: [
                        { validator: validateConfirmPassword, trigger: 'blur' }
                    ],
                }
            }
        },
    }
</script>

<style scoped>
    .el-card {
        height: auto;
    }

    :deep(.el-card__header) {
        padding: 20px;
    }

    :deep(.el-card__body) {
        padding-top: 20px
    }
</style>