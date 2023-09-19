<!-- nurse的头部组件 -->
<!-- 需要传入props[pageName,formData] -->
<template>
    <el-row style="display: flex;justify-content: space-around;width: 100%;">
        <el-col :span="18">
            <el-form :inline="true" :model="formData" size="mini">
                <!-- <slot name="HeaderLeft">这里是默认left插槽</slot> -->
                <!-- 看护记录头部左边 -->
                <template v-if="pageName == 'NurseRecord'">
                    <el-form-item>
                        <el-select v-model="formData.department" size="mini" style="max-width: 150px;"
                            placeholder="请选择部门">
                            <el-option label="部门1" value="部门1"></el-option>
                            <el-option label="部门2" value="部门2"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-select v-model="formData" size="mini" style="max-width: 150px;" placeholder="请选择姓名">
                            <el-option v-for="(item, index) in formData.person" :key="index" :label="item.label"
                                :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="看护时间">
                        <el-date-picker v-model="formData.nurseDate" type="daterange" range-separator="至"
                            start-placeholder="开始时间" end-placeholder="结束时间" format="yyyy-MM-dd"
                            value-format="yyyy-MM-dd" unlink-panels size="mini" style="max-width: 250px;">

                        </el-date-picker>
                    </el-form-item>


                    <el-form-item>
                        <el-input v-model="formData.search" placeholder="请输入搜索内容"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button icon="el-icon-search" type="primary">搜索</el-button>
                    </el-form-item>
                </template>
                <!-- 其他的 -->

                <template v-else>
                    <el-form-item>
                        <el-select v-model="formData.department" size="mini">
                            <el-option label="部门1" value="部门1"></el-option>
                            <el-option label="部门2" value="部门2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="formData.search" placeholder="请输入搜索内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button icon="el-icon-search" type="primary">搜索</el-button>
                    </el-form-item>
                </template>
            </el-form>
        </el-col>
        <el-col :span="6" style="display: flex;justify-content: end;">
            <template v-if="pageName == 'IntoNurse'">
                <!-- 如果为代转入看护IntoNurse 则一下按钮 -->
                <el-button icon="el-icon-user" size="mini"
                    style="background-color: orange; color: white;">批量接收</el-button>
                <el-button icon="el-icon-user" size="mini" style="background-color: red; color: white;">批量退回</el-button>
            </template>
            <template v-else-if="pageName == 'IntoNurseManage'">
                <!-- 如果为看护管理IntoNurseManage 则以下按钮 -->
                <el-button icon="el-icon-date" size="mini" style="background-color: greenyellow;">休假</el-button>
                <el-button icon="el-icon-user" size="mini" style="background-color: red;">批量结束</el-button>
                <el-button icon="el-icon-user" size="mini" style="background-color: orange;">批量转调</el-button>
                <el-button icon="el-icon-upload2" size="mini" style="background-color: #40c9c6;">导出</el-button>
            </template>

            <template v-else-if="pageName == 'AssignNurse'">
                <!-- 如果为外派看护 -->
                <el-button icon="el-icon-user" size="mini" style="background-color: orange;">外派看护</el-button>
                <el-button icon="el-icon-upload2" size="mini" style="background-color: #40c9c6;">导出</el-button>
            </template>
            <template v-else-if="pageName == 'NurseRecord'">
                <!-- 如果为看护记录 -->
                <el-button icon="el-icon-upload2" size="mini" style="background-color: #40c9c6;">导出</el-button>
                <el-button icon="el-icon-download" size="mini" style="background-color: #40c9c6;">导入</el-button>
            </template>
        </el-col>

    </el-row>
</template>

<script>
    export default {
        name: "Header",
        props: ["pageName", "formData"],
        data() {
            return {};
        },
    };
</script>

<style scoped>
    .el-button {
        color: white;
    }
</style>