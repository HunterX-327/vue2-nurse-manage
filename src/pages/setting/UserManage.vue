<template>
    <el-card style="height:100%;box-sizing: border-box;">
        <!-- title -->
        <div slot="header" class="clearfix">
            <strong>用户管理</strong>
        </div>
        <el-container>
            <!-- header -->
            <el-header>
                <el-row type="flex" justify="space-between">
                    <el-col :span="5">
                        <el-button type="primary" size="medium">新建账号</el-button>
                    </el-col>
                    <el-col :span="5">
                        <el-form>
                            <el-form-item>
                                <el-input v-model="search" placeholder="请输入账号" size="medium">
                                    <el-button slot="prepend" icon="el-icon-search"></el-button>
                                </el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </el-header>

            <!-- content -->
            <el-main>
                <el-table border style="width: 100%;" :data="tableData" size="medium" height="100%">
                    <el-table-column type="index" align="center"></el-table-column>
                    <el-table-column label="账号" prop="account" align="center"></el-table-column>
                    <el-table-column label="账号类型" prop="category" sortable
                        :filters="[{text:'管理员',value:'admin'},{text:'用户',value:'user'}]"
                        :filter-method="categoryFilterHandle" align="center">
                        <template slot-scope="scope">
                            <template v-if="scope.row.category=='admin'">
                                <el-tag type="success">管理员</el-tag>
                            </template>
                            <template v-else-if="scope.row.category == 'user'">
                                <el-tag type="primary">用户</el-tag>
                            </template>
                        </template>
                    </el-table-column>
                    <el-table-column label="状态" align="center">
                        <template slot-scope="scope">
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="danger" @click="deleteAccountHandle(scope.row)">删除账号</el-button>
                            <el-button type="primary" @click="resetAccountHandle(scope.row)">重置账号</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>

            <!-- footer -->
            <el-footer>
                <FooterVue :totalSize="totalSize" @changePage="changePage" @changeSize="changeSize"></FooterVue>
            </el-footer>
        </el-container>
    </el-card>
</template>

<script>
    import FooterVue from "./components/Footer.vue"
    export default {
        name: "UserManage",
        components: { FooterVue },
        data() {
            return {
                search: "", //搜索框
                total: [
                    {
                        account: "admin",
                        category: "admin",
                        status: "enable",
                    },
                    {
                        account: "user01",
                        category: "user",
                        status: "enable",
                    },
                ],

                totalSize: 0, //总数据
                pageSize: 10,//默认10条数据一页

                tableData: [],//当前页数据
                searchData: [], //搜索后的数据
            }
        },
        methods: {
            // 删除账号
            deleteAccountHandle(row) {

            },
            //重置账号
            resetAccountHandle(row) {

            },

            //类型筛选操作
            categoryFilterHandle(value, row) {
                return row.category == value;
            },


            //改变每页的时候由footer调用 改变页面并切换数据
            changePage(start, end) {
                console.log("收到footer，立即改变tableData");

                //如果搜索框有数据，就使用筛选之后的数据
                if (this.search.trim() == "") {
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
                let value = this.search;

                if (value.trim() == "") {
                    //如果搜索都为空那么页面放回到第一页
                    this.changePage(0, this.pageSize);
                    // this.searchData = [];
                } else {
                    //否则就筛选total中名字包含search中数据的字段
                    this.searchData = this.total.filter(item => {
                        return item.account.includes(value)
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
            "search": function (newValue) {
                this.debounceSearch();
            }
        },

        mounted() {
            this.totalSize = this.total.length;
            this.tableData = this.total.slice(0, 10)
        },
    };
</script>

<style scoped>
    /* 外层 */
    .el-card {
        display: flex;
        flex-direction: column;
    }

    :deep(.el-card_header) {
        flex: 1;
    }


    :deep(.el-card__body) {
        flex: 9;
        padding: 5px 0px;
        height: auto;
    }

    .el-container {
        display: flex;
        flex-direction: column;
        height: 100%;
    }


    .el-main,
    .el-header,
    .el-footer {
        padding: 10px;
    }


    /* container */
    /* .el-container,
    :deep(.el-card__body) {
        width: 100%;
        height: 100%;
    }

    :deep(.el-header) {
        width: 100%;
        height: 6% !important;
        padding: 5px;
        display: flex;
        align-items: center;
    }

    :deep(.el-form-item) {
        margin: 0px 4px;
    }

    :deep(.el-main) {
        width: 100%;
        height: 86% !important;
        padding: 5px;
    }

    :deep(.el-footer) {
        width: 100%;
        height: 8% !important;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    } */
</style>