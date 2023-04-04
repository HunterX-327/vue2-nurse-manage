<template>
    <el-row style="display: flex;justify-content: space-around;width: 100%;">
        <el-col :span="18">
            <slot name="HeaderLeft">这里是默认left插槽</slot>
        </el-col>
        <el-col :span="6" style="display: flex;justify-content: end;">
            <el-button
                icon="el-icon-user"
                size="mini"
                style="background-color: orange; color: white;"
            >批量接收</el-button>
            <el-button
                icon="el-icon-user"
                size="mini"
                style="background-color: red; color: white;"
            >批量退回</el-button>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: "Header",
    props: ["pageName"],
    data() {
        return {};
    },
};
</script>

<style scoped>
</style>