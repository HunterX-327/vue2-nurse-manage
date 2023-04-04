<template>
    <el-card style="padding: 5px;10px" shadow="always">
        <!-- <el-table border style="width: 100%;" :data="tableData" size="mini" height="100%">
            <el-table-column type="selection" width="50" align="center"></el-table-column>
            <el-table-column type="index" label="序号" align="center"></el-table-column>
            <el-table-column prop="name" label="名字" width="60" align="center"></el-table-column>
            <el-table-column prop="age" label="年龄" width="60" align="center"></el-table-column>
            <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
            <el-table-column prop="position" label="职位" align="center"></el-table-column>
            <el-table-column prop="local" label="派出地" align="center"></el-table-column>
            <el-table-column prop="time" label="派出时间" align="center"></el-table-column>
            <el-table-column label="操作" align="center" fixed="right" width="200">
                <el-button type="text" icon="el-icon-user" size="mini" style="color:orange">接受看护</el-button>
                <el-button type="text" icon="el-icon-user" size="mini" style="color:red">退回</el-button>
                <el-button type="text" icon="el-icon-view" size="mini">详情</el-button>
            </el-table-column>
        </el-table>-->

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