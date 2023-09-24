<template lang="">
    <el-container>
        <!-- 头部 -->
        <el-header>
            <el-row style="display: flex;justify-content: space-around;width: 100%;">
                <!-- 左边 -->
                <el-col :span="12">
                    <el-form :inline="true" :model="formData" size="mini">
                        <!-- 部门选择 -->
                        <el-form-item>
                            <el-select v-model="formData.department" placeholder="请选择部门" style="max-width: 150px;">
                                <el-option label="部门一" value="department01"></el-option>
                                <el-option label="部门二" value="department02"></el-option>
                            </el-select>
                        </el-form-item>

                        <!-- 搜索 -->
                        <el-form-item>
                            <el-input placeholder="请输入搜索内容" v-model="formData.search">
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button icon="el-icon-search" type="primary">搜索</el-button>
                        </el-form-item>
                    </el-form>
                </el-col>

                <!-- 右边 -->
                <el-col :span="12" style="display: flex; justify-content: end;">
                    <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini">新增</el-button>
                    <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
                    <el-button type="success" icon="el-icon-download" size="mini">导出</el-button>
                    <el-button type="success" icon="el-icon-upload" size="mini">导入</el-button>
                </el-col>
            </el-row>
        </el-header>

        <!-- 内容 -->
        <el-main>
            <el-card style="padding: 5px 10px" shadow="always">
                <!-- 定义插槽 -->
                <el-table border style="width: 100%;" :data="tableData" size="mini" height="100%">
                    <el-table-column type="selection" width="50" align="center"></el-table-column>
                    <el-table-column label="姓名" prop="name" align="center"></el-table-column>
                    <el-table-column label="性别" prop="sex" align="center"></el-table-column>
                    <el-table-column label="所属部门" prop="department" align="center"></el-table-column>
                    <el-table-column label="出生年月" prop="birthday" align="center"></el-table-column>
                    <el-table-column label="籍贯" prop="nativePlace" align="center"></el-table-column>
                    <el-table-column label="是否党员" prop="isPartyMember" align="center" width="80"></el-table-column>
                    <!-- 状态 各个状态不同的显示颜色 -->
                    <el-table-column label="状态" prop="status" align="center" width="80">
                        <template slot-scope="scope">
                            <template v-if="scope.row.status == '在岗'">
                                <el-tag size="small" type="success">
                                    {{scope.row.status}}
                                </el-tag>
                            </template>
                            <template v-else-if="scope.row.status == '离职'">
                                <el-tag size="small" type="danger">
                                    {{scope.row.status}}
                                </el-tag>
                            </template>
                            <template v-else-if="scope.row.status == '外调'">
                                <el-tag size="small" type="warning">
                                    {{scope.row.status}}
                                </el-tag>
                            </template>
                        </template>
                    </el-table-column>

                    <!-- 操作（由状态决定） -->
                    <el-table-column label="操作" align="center" fixed="right" width="300">
                        <template slot-scope="scope">
                            <template v-if="scope.row.status == '在岗'">
                                <el-button type="text" icon="el-icon-view" size="mini"
                                    style="color: #409eff;">详情</el-button>
                                <el-button type="text" icon="el-icon-edit" size="mini"
                                    style="color: #409eff;">编辑</el-button>
                                <el-button type="text" icon="el-icon-document-delete" size="mini"
                                    style="color: #f56c6c;">离职</el-button>
                                <el-button type="text" icon="el-icon-delete" size="mini"
                                    style="color: #f56c6c;">删除</el-button>
                            </template>
                            <template v-else-if="scope.row.status == '外调'">
                                <el-button type="text" icon="el-icon-view" size="mini"
                                    style="color: #409eff;">详情</el-button>
                                <el-button type="text" icon="el-icon-edit" size="mini"
                                    style="color: #409eff;">编辑</el-button>
                            </template>
                            <template v-else-if="scope.row.status == '离职'">
                                <el-button type="text" icon="el-icon-view" size="mini"
                                    style="color: #409eff;">详情</el-button>
                                <el-button type="text" icon="el-icon-delete" size="mini"
                                    style="color: #f56c6c;">删除</el-button>
                            </template>
                        </template>

                    </el-table-column>
                </el-table>
            </el-card>
        </el-main>

        <!-- 底部 -->
        <el-footer>
            <FooterVue :totalSize="totalSize" @changePage="changePage" @changeSize="changeSize"></FooterVue>
        </el-footer>
    </el-container>
</template>
<script>
    //
    import FooterVue from './Footer.vue'

    export default {
        name: "Content",
        props: ["total"],
        components: { FooterVue },
        data() {
            return {
                formData: {
                    departments: "",
                    search: "",
                },

                totalSize: 0, //总数据
                pageSize: 10,//默认10条数据一页

                tableData: [],//当前页数据
                searchData: [], //搜索后的数据

                // total: []
            }
        },

        methods: {
            //改变每页的时候由footer调用
            changePage(start, end) {
                console.log("收到footer，立即改变tableData");

                //如果搜索框有数据，就使用筛选之后的数据
                if (this.formData.search.trim() == "") {
                    this.totalSize = this.total.length;
                    this.tableData = this.total.slice(start, end);
                } else {
                    this.totalSize = this.searchData.length;
                    this.tableData = this.searchData.slice(start, end);
                }
            },

            //同步每页默认条数
            changeSize(pageSize) {
                this.pageSize = pageSize;
            },

            //搜索操作
            handleSearchChange() {
                console.log("搜索");
                let value = this.formData.search;

                if (value.trim() == "") {
                    //如果搜索都为空那么页面放回到第一页
                    this.changePage(0, this.pageSize);
                    // this.searchData = [];
                } else {
                    //否则就筛选total中名字包含search中数据的字段
                    this.searchData = this.total.filter(item => {
                        return item.name.toUpperCase().includes(value) || item.sex.includes(value) || item.department.includes(value);
                    })

                    this.changePage(0, this.pageSize)
                }

            },

            //防抖执行search操作
            debounceSearch: _.debounce(function () {
                this.handleSearchChange();
            }, 300)
        },

        watch: {
            "formData.search": function (newValue) {
                this.debounceSearch();
            }
        },

        mounted() {
            this.totalSize = this.total.length;
            this.tableData = this.total.slice(0, 10)
        },
    }
</script>
<style>

</style>