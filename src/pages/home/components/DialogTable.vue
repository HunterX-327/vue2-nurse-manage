<template>
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible">
        <template v-if="dialogTitle==`看护记录`">
            <h4>{{city}}看护：</h4>
            <el-table :data="nurseData" border>
                <el-table-column label="名字" prop="name"></el-table-column>
                <el-table-column label="手机号码" prop="phone"></el-table-column>
                <el-table-column label="职位" prop="position"></el-table-column>
                <el-table-column label="看护地" prop="nurseCity"></el-table-column>
                <el-table-column label="外派时间" prop="assignTime"></el-table-column>
                <el-table-column label="已看护天数" prop="nurseDays"></el-table-column>
            </el-table>
        </template>
        <template v-else>
            <h4>{{city}}在岗人员</h4>
            <el-table :data="onJobData" border size="middle" height="500px">
                <el-table-column label="名字" prop="name"></el-table-column>
                <el-table-column label="手机号码" prop="phone"></el-table-column>
                <el-table-column label="职位" prop="position"></el-table-column>
                <el-table-column label="区域" prop="city"></el-table-column>
            </el-table>
        </template>
    </el-dialog>
</template>
<script>
export default {
    name: "Dialog",
    data() {
        return {
            dialogVisible: false,
            title: "",
            city: "",
            nurseData: [
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
                {
                    name: "张三",
                    phone: 12345678,
                    position: "看护人员",
                    nurseCity: "",
                    assignTime: "2022-08-1",
                    nurseDays: "20天",
                },
            ],
            onJobData: [
                {
                    name: "李四",
                    phone: 1548487165,
                    position: "看护人员",
                    city: "",
                },
                {
                    name: "李四",
                    phone: 1548487165,
                    position: "看护人员",
                    city: "",
                },
                {
                    name: "李四",
                    phone: 1548487165,
                    position: "看护人员",
                    city: "",
                },
                {
                    name: "李四",
                    phone: 1548487165,
                    position: "看护人员",
                    city: "",
                },
                {
                    name: "李四",
                    phone: 1548487165,
                    position: "看护人员",
                    city: "",
                },
                {
                    name: "李四",
                    phone: 1548487165,
                    position: "看护人员",
                    city: "",
                },
                {
                    name: "李四",
                    phone: 1548487165,
                    position: "看护人员",
                    city: "",
                },
                {
                    name: "李四",
                    phone: 1548487165,
                    position: "看护人员",
                    city: "",
                },
                {
                    name: "李四",
                    phone: 1548487165,
                    position: "看护人员",
                    city: "",
                },
                {
                    name: "李四",
                    phone: 1548487165,
                    position: "看护人员",
                    city: "",
                },
                {
                    name: "李四",
                    phone: 1548487165,
                    position: "看护人员",
                    city: "",
                },
                {
                    name: "李四",
                    phone: 1548487165,
                    position: "看护人员",
                    city: "",
                },
            ],
        };
    },
    methods: {
        //操作dialog事件
        handleDialog(seriesName, name) {
            console.log("收到了来自home组件的打开请求！！", seriesName, name);
            this.dialogVisible = !this.dialogVisible;
            this.title = seriesName;
            this.city = name;
        },
    },
    computed: {
        //标题
        dialogTitle() {
            return this.title == "看护人数" ? "看护记录" : "在岗人员详情";
        },
    },

    watch: {
        city(data) {
            this.nurseData = this.nurseData.map((item) => {
                item.nurseCity = data;
                return item;
            });
            this.onJobData = this.onJobData.map((item) => {
                item.city = data;
                return item;
            });

            // this.nurseData.forEach((item) => {
            //     item.nurseCity =data;
            // });
        },
    },
    mounted() {
        //创建全局事件总线 接受home的echart的数据
        this.$bus.$on("handleDialog", this.handleDialog);
    },
};
</script>

<style scoped>
:deep(.el-dialog__body) {
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>