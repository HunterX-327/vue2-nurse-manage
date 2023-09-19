<template>
    <el-card style="height:100%;box-sizing: border-box;">
        <el-container>
            <el-main>
                <el-card>
                    <!-- 头部 -->
                    <div slot="header" style="padding-left: 10px;">
                        <i class="el-icon-download" style="font-size: 15px; font-weight: bold;"></i>
                        <strong>导入数据</strong>
                    </div>
                    <!-- 主体 -->
                    <div>
                        <el-container>
                            <el-main>
                                <el-row style="padding:10px">
                                    <el-button type="primary"
                                        style="padding: 13px;font-size: 15px; margin-left: 10px;">下载基础数据表模板</el-button>
                                    <el-button type="success"
                                        style="padding: 13px;font-size: 15px; margin-left: 30px;">上传到服务器</el-button>
                                </el-row>
                                <el-row style="padding-left:20px">
                                    <el-upload class="upload-demo" drag action="http://httpbin.org/post" multiple
                                        :file-list="fileList" :before-upload="beforeUpload" :on-success="successUpload"
                                        :on-error="errorUpload">
                                        <i class="el-icon-upload"></i>
                                        <div class="el-upload__text">
                                            将文件拖到此处，或
                                            <em>点击上传</em>
                                        </div>
                                        <div class="el-upload__tip" slot="tip">只能上传Excel(.xlsx)文件，且不超过2MB</div>
                                    </el-upload>
                                </el-row>
                                <el-row>
                                    <div style="font-size:15px;font-weight: bold;padding-left: 10px; margin: 20px 0px;">
                                        只允许导入
                                        <span style="color:red;">基础数据表</span>,且为
                                        <span style="color:red;">Excel (.xlsx)</span>文件格式，单个文件大小不能超过
                                        <span style="color:red;">2MB</span>
                                    </div>
                                </el-row>
                            </el-main>
                            <el-main></el-main>
                        </el-container>
                    </div>
                </el-card>
            </el-main>
        </el-container>

        <!-- 弹窗 -->
        <el-dialog :title="dialogTitle" :visible.sync="dialogVisible">
            <el-table :data="fileResult" border size="medium">
                <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
                <el-table-column label="文件名" prop="name" align="center"></el-table-column>
                <el-table-column label="导入结果" prop="isUpload" align="center">
                    <template v-slot="scope">
                        <template v-if="scope.row.state == true">
                            <el-tag type="success">导入成功</el-tag>
                        </template>
                        <template v-else-if="scope.row.state == false">
                            <el-tag type="danger">上传失败</el-tag>
                        </template>
                        <template v-else-if="scope.row.state == 'invalid'">
                            <el-tag type="danger">文件格式错误</el-tag>
                        </template>
                    </template>
                </el-table-column>
            </el-table>
            <div slot="footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </el-card>
</template>

<script>
    import "animate.css";
    import { mapState, mapActions } from "vuex";
    export default {
        name: "ImportData",
        data() {
            return {
                dialogTitle: "文件读取结果",
                dialogVisible: false,
                // fileResult: [],

                // //文件数据
                // fileList: [
                //     {
                //         name: "food.jpeg",
                //         url: "",
                //         isUpload: true,
                //     },
                //     {
                //         name: "food2.jpeg",
                //         url: "",
                //         isUpload: false,
                //     },
                // ],
            };
        },
        methods: {
            //mapActions生成checkFile方法
            ...mapActions("importAbout", { checkFile: "checkFile" }),

            /* 上传之前判断是否是xlsx活xls文件，如果不是直接不上传 */
            async beforeUpload(file) {
                this.dialogVisible = true;
                console.log("beforeUpload钩子", file);

                return this.checkFile(file)
                    .then((result) => {
                        console.log("then：", result);
                        return true;
                    })
                    .catch((error) => {
                        console.log("catch：", error);
                        reject();
                        return false;
                    });

                // return new Promise(async (resolve, reject) => {
                //     try {
                //         await this.checkFile(file);
                //         resolve(true);
                //     } catch (error) {
                //         console.log("beforeUpload收到来着action错误数据：", error);
                //         reject(false);
                //     }
                // });
            },

            successUpload(_, file, fileList) {
                console.log("successUpload钩子");
                let fileInfo = { name: file.name, state: true };
                this.fileResult.push(fileInfo);
                this.fileList.push(fileInfo);
            },
            errorUpload(err, file, fileList) {
                console.log("errorUpload钩子");
                let fileInfo = { name: file.name, state: false };
                this.fileResult.push(fileInfo);
            },
        },

        computed: {
            // vuex获取files上传结果数据 和 fileList数据
            ...mapState("importAbout", {
                fileResult: "fileResult",
                fileList: "fileList",
            }),
        },
    };
</script>

<style scoped>
    .el-main {
        padding: 2px;
    }

    :deep(.el-card__body),
    :deep(.el-card__header) {
        padding: 5px;
    }

    :deep(.el-tag) {
        padding: 0px 20px;
    }
</style>