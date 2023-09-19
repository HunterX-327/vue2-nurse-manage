<!-- nurse部分footer的组件 -->
<!-- 需要传出props[totalSize,tableData] -->
<!-- 需要执行event[changePage,changeSize] -->
<template>
    <el-pagination :page-size="pageSize" :page-sizes="[5,10,20]" layout="total, sizes, prev, pager, next, jumper"
        :total="totalSize" @current-change="handleCurrentChange" @size-change="handleSizeChange"></el-pagination>
</template>

<script>
    export default {
        name: "Footer",
        props: ["totalSize", "tableData"],
        data() {
            return {
                //每页列数
                pageSize: 10,
                //当前页数
                currentPage: 1,
            };
        },
        methods: {
            // 切换页面时 改变当前数据
            handleCurrentChange(val) {
                console.log("页面切换了！", val);
                this.currentPage = val;
                let start = (val - 1) * this.pageSize; //开始数据
                let end = start + this.pageSize; //结束数据

                //触发父级组件传来的自定义事件 切换页时用于修改每页的数据
                //传入开始-结束-当前页
                this.$emit("changePage", start, end);
            },

            // 改变每页显示size时
            handleSizeChange(val) {
                this.pageSize = val;
                this.handleCurrentChange(this.currentPage);
                this.$emit("changeSize", val);
            },
        },
    };
</script>

<style scoped>
    /* 分页 */
    .el-pagination {
        display: flex;
        justify-content: flex-end;
    }
</style>