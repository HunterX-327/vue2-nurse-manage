<template>
    <el-card style="padding: 5px 10px" shadow="always">
        <!-- 定义插槽 -->
        <el-table border style="width: 100%;" :data="tableData" size="mini" height="100%">
            <slot>table插槽默认位置</slot>
        </el-table>
    </el-card>
</template>

<script>
    export default {
        props: ["tableData"],
    };
</script>

<style>
</style>