<template>
    <el-form :inline="true" :model="formData" size="mini">
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
    </el-form>
</template>

<script>
export default {
    name: "HeaderLeft",
    props: ["formData"],
};
</script>

<style>
</style>