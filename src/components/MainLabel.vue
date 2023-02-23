<template>
    <div class="label">
        <span class="arrow arrow-left" v-show="isArrow" @click="handleArrow">
            <i class="el-icon-arrow-left"></i>
        </span>
        <div class="container" ref="container">
            <div class="main" ref="main" :style="mainStyle">
                <!-- home固定tag -->
                <el-tag
                    @click="routeTo(tagHome)"
                    size="medium"
                    ref="home"
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
                    :ref="`tag-${tag.path}`"
                    :key="tag.name"
                    :type="tag.type"
                    effect="plain"
                >{{tag.name}}</el-tag>
            </div>
        </div>
        <span class="arrow arrow-right" v-show="isArrow" @click="handleArrow">
            <i class="el-icon-arrow-right"></i>
        </span>
    </div>
</template>


<script>
import { mapMutations, mapState, mapActions } from "vuex";
import _ from "lodash";
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

            //main的属性，用于移动main
            mainStyle: {},

            //main的偏移量
            mainOffset: 0,

            //当前路由
            routePath: "",

            //是否显示箭头
            isArrow: false,
        };
    },
    computed: {
        //借助mapState读取数据
        ...mapState("labelAbout", { tags: "tagData" }),
    },
    methods: {
        ...mapMutations("labelAbout", { removeTag: "REMOVETAG" }),
        ...mapActions("labelAbout", { addTag: "addTag" }),

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

        handleClose(tag) {
            //拿到当前标签
            this.tags.splice(this.tags.indexOf(tag), 1);
            this.removeTag(tag);

            let path = tag.path;
            //修改位置
            let tagWidth = this.$refs[`tag-${path}`][0].$el.clientWidth;
            let newOffset = this.mainOffset + tagWidth + 10;
            if (newOffset >= 0) {
                this.$set(this.mainStyle, "transform", `translateX(0px)`);
                this.mainOffset = 0;
            } else {
                this.$set(
                    this.mainStyle,
                    "transform",
                    `translateX(${newOffset}px)`
                );
                this.mainOffset = newOffset; //实时刷新mainOffset
            }
        },

        //container的size改变时 操作main移动
        handleMain(entry) {
            let path = this.$route.path;
            let mainOffset = this.mainOffset;
            let mainWidth = this.$refs.main.clientWidth;
            let containerWidth = entry.contentRect.width;
            // console.log(this.$refs[`tag-${path}`]);
            let tagWidth = this.$refs[`tag-${path}`][0].$el.clientWidth;
            let tagLeft = this.$refs[`tag-${path}`][0].$el.offsetLeft; //tag到main的left距离
            let tagRight = mainWidth - tagLeft - tagWidth; //tag到main的right距离
            let mainRight = mainWidth - Math.abs(mainOffset) - containerWidth; //main在container右边的距离
            let tagRightC = tagRight - mainRight; //tag到container右侧的距离
            if (mainWidth >= containerWidth) {
                this.isArrow = true;
                let newOffset = mainOffset + tagRightC; //将当前offset加上tag到containerRight的距离，
                if (newOffset >= 0) {
                    this.$set(this.mainStyle, "transform", `translateX(0px)`);
                    this.mainOffset = 0;
                } else {
                    this.$set(
                        this.mainStyle,
                        "transform",
                        `translateX(${newOffset - 10}px)`
                    );
                    this.mainOffset = newOffset; //实时刷新mainOffset
                }
            } else {
                this.isArrow = false;
                this.$set(this.mainStyle, "transform", `translateX(0px)`);
                this.mainOffset = 0;
            }
        },

        //路由改变判断main是否大于container
        handleTag(path) {
            let mainWidth = this.$refs.main.clientWidth;
            let containerWidth = this.$refs.container.clientWidth;
            let mainOffset = this.mainOffset; //main当前的offset
            if (mainWidth >= containerWidth) {
                this.isArrow = true;
                console.log("超过了，准备移动当前tag");
                let tagWidth = this.$refs[`tag-${path}`][0].$el.clientWidth;
                let tagLeft = this.$refs[`tag-${path}`][0].$el.offsetLeft; //tag到main的left距离
                let tagRight = mainWidth - tagLeft - tagWidth; //tag到main的right距离

                let mainRight =
                    mainWidth - Math.abs(mainOffset) - containerWidth; //main在container右边的距离
                let tagRightC = tagRight - mainRight; //tag到container右侧的距离
                let newOffset = mainOffset + tagRightC; //当前offset减去tagRightC得到新offset

                if (newOffset >= 0) {
                    //如果newOffset大于零就将main靠左，防止向右做多余移动
                    this.$set(this.mainStyle, "transform", `translateX(0)`);
                    this.mainOffset = 0;
                } else {
                    //如果没有就移动
                    this.$set(
                        this.mainStyle,
                        "transform",
                        `translateX(${newOffset - 10}px)`
                    );
                    this.mainOffset = newOffset;
                }
            }
        },

        /* 点击左右按钮 移动100px */
        handleArrow(event) {
            if (event.target.classList.contains("arrow-left")) {
                let newOffset = this.mainOffset + 100;
                if (this.mainOffset >= -100) {
                    this.$set(this.mainStyle, "transform", `translateX(0px)`);
                    this.mainOffset = 0;
                } else {
                    this.$set(
                        this.mainStyle,
                        "transform",
                        `translateX(${newOffset}px)`
                    );
                    this.mainOffset = newOffset;
                }
            } else if (event.target.classList.contains("arrow-right")) {
                let newOffset = this.mainOffset - 100;
                let containerWidth = this.$refs.container.clientWidth;
                let mainWidth = this.$refs.main.clientWidth;
                let mainRight =
                    mainWidth - Math.abs(this.mainOffset) - containerWidth;

                if (mainRight <= 100) {
                    //如果mainRight小于100就直接顶到最后
                    let newOffset = this.mainOffset - mainRight;
                    this.$set(
                        this.mainStyle,
                        "transform",
                        `translateX(${newOffset}px)`
                    );
                    this.mainOffset = newOffset;
                } else {
                    this.$set(
                        this.mainStyle,
                        "transform",
                        `translateX(${newOffset}px)`
                    );
                    this.mainOffset = newOffset;
                }
            }
        },
    },
    watch: {
        $route(val) {
            // 路由改变的时候判断 home不做判断
            let path = val.path;
            if (path == "/home") {
                this.$set(this.mainStyle, "transform", `translateX(0px)`);
                this.mainOffset = 0;
            } else {
                this.routePath = path;
            }
        },

        routePath(path) {
            this.$nextTick(() => {
                //路由改变调整main
                this.handleTag(path);
            });
        },
    },
    mounted() {
        // console.log(this.tags);
        //挂载时，将当前路由的tag添加在store中
        // console.log(this.$route);
        if (this.$route.path !== "/") {
            this.TagsValue = {
                name: this.$route.meta,
                path: this.$route.path,
                type: "warning",
            };
            this.addTag(this.TagsValue);
        }

        // console.log(this.$refs.main);
        //监听container的size
        /* 遇到的问题，在mounted中创建ResizeObserver的时候，
        最好使用this,之后再beforeDestroy中使用observer.disconnect()销毁实例 */
        const container = this.$refs.container;
        this.containerObserver = new ResizeObserver(
            _.debounce((entries) => {
                for (let entry of entries) {
                    if (this.$route.path != "/home") {
                        this.handleMain(entry);
                    }
                }
            }, 200)
        );
        this.containerObserver.observe(container);

        /* //监听窗口改变大小 实时改变label的left
        window.addEventListener("resize", () => {
            let mainWidth = main.clientWidth;
            let containerWidth = container.clientWidth;
            let moveWidth = containerWidth - mainWidth;
            if (mainWidth >= containerWidth) {
                console.log("超过");
                this.$set(
                    this.mainStyle,
                    "transform",
                    `translateX(${moveWidth}px)`
                );
            } else {
                this.$set(this.mainStyle, "transform", `translateX(0)`);
            }
        }); */

        /* 已经被监听路由代替 */
        // 监听main的size 如果超过（就是每添加一个tag判断是否超过，如果超过就移动）
        /* const main = this.$refs.main;
        var mainObserver = new ResizeObserver((entries) => {
            for (let entry of entries) {
                let mainWidth = entry.contentRect.width;
                let containerWidth = container.clientWidth;
                if (mainWidth >= containerWidth) {
                    //如果main超过container就将操作为true
                    this.handleMain();
                } else {
                    this.$set(this.mainStyle, "transform", `translateX(0)`);
                    this.mainOffset = 0;
                }
            }
        });
        mainObserver.observe(main); */
    },

    beforeDestroy() {
        this.containerObserver.disconnect();
        this.containerObserver = null;
    },
};
</script>

<style scoped>
.label {
    display: flex;
}

.container {
    flex: 1;
    overflow: hidden;
    /* position: relative; */
}

.main {
    /* height: 100%; */
    overflow: hidden;
    white-space: nowrap;
    /* position: absolute; */
    float: left;
    transition: 0.5s ease-in-out;
}
.el-tag {
    margin: 0px 5px 0px 5px;
    display: inline-block;
    user-select: none;
}

.el-tag:hover {
    background-color: #ffefd6;
}

.el-tag--dark:hover {
    background-color: rgb(249, 184, 94);
}

.arrow {
    width: 20px;
    user-select: none;
    text-align: center;
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

.arrow:hover {
    background-color: #b1b1b1;
    transition: 0.3s ease-in-out;
}

.arrow > i {
    pointer-events: none;
    font-size: 16px;
    font-weight: bold;
}
</style>