<template>
    <div class="main">
        <!-- home固定tag -->
        <el-tag
            @click="routeTo(tagHome)"
            size="medium"
            :key="tagHome.name"
            :type="tagHome.type"
            effect="dark"
        >{{tagHome.name}}</el-tag>
        <el-tag
            @click="routeTo(tag)"
            @close="handleClose(tag)"
            size="medium"
            closable
            v-for="tag in tags"
            :key="tag.name"
            :type="tag.type"
            effect="plain"
        >{{tag.name}}</el-tag>
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
    name: "MainLabel",
    data() {
        return {
            // tags: [
            //     { name: "标签1", type: "warning" },
            //     { name: "标签2", type: "warning" },
            //     { name: "标签3", type: "warning" },
            // ],
            tagHome: { name: "首页", path: "/home", type: "warning" },
        };
    },
    computed: {
        //借助mapState读取数据
        ...mapState({ tags: "tagData" }),
    },
    methods: {
        //跳转
        routeTo(tag) {
            //点击tag的时候跳转到对应路由
            if (this.$route.path !== tag.path) {
                //如果当前跳转路径和当前路路径不一样 就跳转
                this.$router.push({
                    path: tag.path,
                });
            }

            //触发getDefaultActive事件 将path传给Nav组件 修改nav的显示
            this.$bus.$emit("getDefaultActive", tag.path);
        },
        ...mapMutations({ removeTag: "REMOVETAG" }),
        handleClose(tag) {
            //拿到当前标签
            this.tags.splice(this.tags.indexOf(tag), 1);
            this.removeTag(tag);
        },
    },
    mounted() {
        // console.log(this.tags);
    },
};
</script>

<style scoped>
.main {
    height: 100%;
}
.el-tag {
    margin: 0px 5px 0px 5px;
    user-select: none;
}

.el-tag:hover {
    background-color: #ffefd6;
}

.el-tag--dark:hover {
    background-color: rgb(249, 184, 94);
}
</style>