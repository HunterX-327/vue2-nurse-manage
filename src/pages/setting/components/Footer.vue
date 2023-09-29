<template lang="">
    <el-pagination :page-size="pageSize" :page-sizes="[5,10,20]" layout="total, sizes, prev, pager, next, jumper"
        :total="totalSize" @current-change="handleCurrentChange" @size-change="handleSizeChange"></el-pagination>
</template>
<script>
    export default {
        name: "FooterVue",
        props: ["totalSize"],
        data() {
            return {
                pageSize: 10, //每页条数
                currentPage: 1, //当前页
            }
        },

        methods: {
            //页面改变时
            handleCurrentChange(val) {
                console.log("页面切换了！", val);
                this.currentPage = val;

                let start = (val - 1) * this.pageSize; //获取开始
                let end = start + this.pageSize; //获取结尾

                //触发父级组件传来的自定义事件 切换页时用于修改每页的数据
                //传入开始-结束-当前页
                this.$emit("changePage", start, end);
            },

            //页面size改变时
            handleSizeChange(val) {
                console.log("size改变了", val);
                this.pageSize = val; //重置size
                this.handleCurrentChange(this.currentPage); //以当前页为基础，以新的size调用页面改变函数
                //触发父级传来的自定义事件，用于同步父组件的pageSize
                this.$emit("changeSize", this.pageSize);
            }
        },
    }
</script>
<style lang="">

</style>