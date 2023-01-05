<template>
    <!-- <div id="myChart" style="width: auto;height: 400px"></div> -->
    <el-card
        class="box-card"
        style="height:100%;box-sizing: border-box;"
        :body-style="{ padding: '2px',height:'100%',boxSizing: 'border-box' }"
    >
        <!-- 人员与部门总信息 -->
        <el-container style="height: 20%;">
            <el-main style="padding:5px">
                <el-card shadow="always">
                    <div slot="header">
                        <el-row style="height:100%" type="flex" justify="center" align="middle">
                            <el-col :span="6">
                                <strong style="padding-left:10px">人员与部门总信息</strong>
                            </el-col>
                            <el-col :span="5" :offset="13">
                                <!-- 人员与部门总信息选择框 -->
                                <el-form :model="form" label-width="80px" size="mini">
                                    <el-form-item style="margin:0px" size="mini">
                                        <el-select
                                            v-model="form.person"
                                            placeholder="请选择活动区域"
                                            size="mini"
                                        >
                                            <el-option label="区域一" value="shanghai"></el-option>
                                            <el-option label="区域二" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </div>

                    <el-row :gutter="20" style="height: 100%;">
                        <!-- 人员信息 -->
                        <TitleCardVue>
                            <img slot="img" src="../../assets/persons.png" style="width:50%" />
                            <template v-slot:infoLeft="{info}">
                                <span>总数</span>
                                <span>{{info.person.total}}</span>
                            </template>
                            <template v-slot:infoRight="{info}">
                                <span>看护人数</span>
                                <span>{{info.person.nurseNumber}}</span>
                            </template>
                        </TitleCardVue>

                        <!-- 党员信息 -->
                        <TitleCardVue>
                            <img slot="img" src="../../assets/members.png" alt />
                            <template v-slot:infoLeft="{info}">
                                <span>党员人数</span>
                                <span>{{info.member.isMember}}</span>
                            </template>
                            <template v-slot:infoRight="{info}">
                                <span>非党员人数</span>
                                <span>{{info.member.notMember}}</span>
                            </template>
                        </TitleCardVue>

                        <!-- 男女人数 -->
                        <TitleCardVue>
                            <img slot="img" src="../../assets/sex.png" alt />
                            <template v-slot:infoLeft="{info}">
                                <span>男生人数</span>
                                <span>{{info.sex.male}}</span>
                            </template>
                            <template v-slot:infoRight="{info}">
                                <span>女生人数</span>
                                <span>{{info.sex.female}}</span>
                            </template>
                        </TitleCardVue>

                        <!-- 部门个数 -->
                        <TitleCardVue>
                            <img slot="img" src="../../assets/departments.png" alt />
                            <template v-slot:infoLeft>
                                <span></span>
                                <span></span>
                            </template>
                            <template v-slot:infoRight="{info}">
                                <span>部门人数</span>
                                <span>{{info.department.number}}</span>
                            </template>
                        </TitleCardVue>
                    </el-row>
                </el-card>
            </el-main>
        </el-container>

        <!-- 工作时长排行榜 和 看护人数与在岗人数统计 -->
        <el-container style="height: 50%;">
            <!-- 工作时长排行榜 -->
            <el-main style="padding:5px">
                <el-card shadow="always">
                    <div slot="header">
                        <el-row style="height:100%" type="flex" justify="center" align="middle">
                            <el-col :span="10">
                                <strong style="padding-left:10px">工作时长排行榜</strong>
                            </el-col>
                            <el-col :span="10" :offset="4">
                                <el-form :model="form" label-width="80px" size="mini">
                                    <el-form-item style="margin:0px" size="mini">
                                        <el-select
                                            v-model="form.person"
                                            placeholder="请选择活动区域"
                                            size="mini"
                                        >
                                            <el-option label="区域一" value="shanghai"></el-option>
                                            <el-option label="区域二" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-form>
                            </el-col>
                        </el-row>
                    </div>
                    <div style="height:100%">
                        <el-row type="flex" justify="center" align="middle" style="height: 10%;">
                            <strong>工作时长排行榜</strong>
                        </el-row>
                        <el-row style="height: 90%;">
                            <el-table
                                :data="tableData"
                                style="width:100%;"
                                height="100%"
                                size="middle"
                            >
                                <el-table-column type="index" width="50" label="序号" align="center"></el-table-column>
                                <el-table-column prop="name" label="姓名" width="100" align="center"></el-table-column>
                                <el-table-column
                                    prop="department"
                                    label="部门"
                                    width="150"
                                    align="center"
                                ></el-table-column>
                                <el-table-column
                                    prop="position"
                                    label="职务"
                                    width="200"
                                    align="center"
                                ></el-table-column>
                                <el-table-column
                                    prop="workHours"
                                    label="工作时长"
                                    width="150"
                                    align="center"
                                ></el-table-column>
                            </el-table>
                        </el-row>
                    </div>
                </el-card>
            </el-main>

            <!-- 看护人数与在岗人数统计 -->
            <el-main style="padding:5px">
                <el-card shadow="always">
                    <div slot="header">
                        <el-row style="height:100%" type="flex" justify="start" align="middle">
                            <el-col :span="12">
                                <strong style="padding-left:10px">看护人数与在岗人数统计</strong>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="myChart" style="width: 100%;height: 100%;overflow: auto;"></div>
                </el-card>
            </el-main>
        </el-container>

        <!-- 部门人数统计 -->
        <el-container style="height: 30%;">
            <el-main style="padding:5px">
                <el-card shadow="always">
                    <div slot="header">
                        <el-row style="height:100%" type="flex" justify="start" align="middle">
                            <el-col :span="12">
                                <strong style="padding-left:10px">部门人数统计</strong>
                            </el-col>
                        </el-row>
                    </div>
                    <div id="myChart2" style="width:100%;height: 100%;overflow: auto;"></div>
                </el-card>
            </el-main>
        </el-container>

        <DialogVue></DialogVue>
    </el-card>
</template>

<script>
import * as echarts from "echarts";
import TitleCardVue from "./TitleCard.vue";
import DialogVue from "./DialogTable.vue";
import "animate.css";

export default {
    name: "Home",
    components: { TitleCardVue, DialogVue },
    data() {
        return {
            form: {
                person: "",
            },
            tableData: [
                {
                    name: "张三",
                    department: "濂溪",
                    position: "特巡警支队民警",
                    workHours: "365",
                },
                {
                    name: "张三",
                    department: "濂溪",
                    position: "特巡警支队民警",
                    workHours: "365",
                },
                {
                    name: "张三",
                    department: "濂溪",
                    position: "特巡警支队民警",
                    workHours: "365",
                },
                {
                    name: "张三",
                    department: "濂溪",
                    position: "特巡警支队民警",
                    workHours: "365",
                },
                {
                    name: "张三",
                    department: "濂溪",
                    position: "特巡警支队民警",
                    workHours: "365",
                },
                {
                    name: "张三",
                    department: "濂溪",
                    position: "特巡警支队民警",
                    workHours: "365",
                },
                {
                    name: "张三",
                    department: "濂溪",
                    position: "特巡警支队民警",
                    workHours: "365",
                },
                {
                    name: "张三",
                    department: "濂溪",
                    position: "特巡警支队民警",
                    workHours: "365",
                },
                {
                    name: "张三",
                    department: "濂溪",
                    position: "特巡警支队民警",
                    workHours: "365",
                },
            ],
        };
    },
    mounted() {
        this.echartsInit();
        this.echartsInit2();
    },
    methods: {
        echartsInit() {
            var myChart = echarts.init(document.getElementById("myChart"));
            myChart.setOption({
                legend: {},
                tooltip: {},
                grid: {
                    bottom: "15%",
                    top: "10%",
                },
                dataset: {
                    //提供一份数据
                    source: [
                        ["product", "看护人数", "在岗人数"],
                        ["修水县", 43.3, 85.8],
                        ["武宁县", 43.3, 85.8],
                        ["瑞昌市", 43.3, 85.8],
                        ["都昌县", 43.3, 85.8],
                        ["彭泽县", 43.3, 85.8],
                        ["德安县", 43.3, 85.8],
                        ["共青城市", 43.3, 85.8],
                        ["庐山市", 43.3, 85.8],
                    ],
                },
                // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
                xAxis: {
                    type: "category",
                    axisLabel: { interval: 0, rotate: 30 },
                },
                // 声明一个 Y 轴，数值轴。
                yAxis: {},
                // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
                series: [{ type: "bar" }, { type: "bar" }],
            });

            myChart.on("click", (params) => {
                console.log(params.seriesName);
                var seriesName = params.seriesName;
                var name = params.name;
                this.handleDialog(seriesName, name);
            });

            //调整窗口时，自动调整chart大小
            window.addEventListener("resize", () => {
                console.log("调整了窗口");
                myChart.resize();
            });
        },

        echartsInit2() {
            var myChart = echarts.init(document.getElementById("myChart2"));
            myChart.setOption({
                legend: {},
                tooltip: {},
                grid: {
                    bottom: "15%",
                    top: "15%",
                },
                dataset: {
                    //提供一份数据
                    dimensions: ["product", "看护人数"],
                    source: [
                        ["修水县", 43.3],
                        ["武宁县", 43.3],
                        ["瑞昌市", 43.3],
                        ["都昌县", 43.3],
                        ["彭泽县", 43.3],
                        ["德安县", 43.3],
                        ["共青城市", 43.3],
                        ["庐山市", 43.3],
                    ],
                },
                // 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
                xAxis: {
                    type: "category",
                    axisLabel: { interval: 0 },
                },
                // 声明一个 Y 轴，数值轴。
                yAxis: {},
                // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
                series: [
                    {
                        type: "bar",
                        label: {
                            show: true,
                            precision: 1,
                            position: "top",
                            formatter: "{@看护人数}人",
                        },
                    },
                ],

                //提示框组件。
                tooltip: {
                    show: true,
                    formatter: function (params) {
                        return (
                            "X 轴：" +
                            params.name +
                            "<br>" +
                            "Y 轴：" +
                            params.value[params.encode.y[0]]
                        );
                    },
                },
            });

            //调整窗口时，自动调整chart大小
            window.addEventListener("resize", () => {
                console.log("调整了窗口");
                myChart.resize();
            });
        },

        //点击图表信息时，打开dialog
        handleDialog(seriesName, name) {
            this.$bus.$emit("handleDialog", seriesName, name);
        },
    },
};
</script>

<style scoped>
.clearfix {
    padding: 0px;
}

.el-main {
    height: 100%;
    padding: 0px;
    box-sizing: border-box;
}

.el-card {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
}

.el-card :deep(.el-card__header) {
    padding: 2px;
}

.el-card :deep(.el-card__header),
.el-card :deep(.el-card__body) {
    box-sizing: border-box;
}

/* 人员与部门信息 */

/* 修改选择框的高度 */
:deep(.el-select input) {
    padding: 4px;
    height: 100%;
}

.el-container:nth-child(1) .el-card :deep(.el-card__header) {
    height: 25%;
}

.el-container:nth-child(1) .el-card :deep(.el-card__header) > div {
    height: 100%;
}

.el-container:nth-child(1) .el-card :deep(.el-card__body) {
    height: 75%;
    padding: 5px;
}

/* 工作时长排行榜 和 看护人数与在岗人数统计 */
.el-container:nth-child(2) .el-main {
    width: 50%;
}

.el-container:nth-child(2) :deep(.el-main .el-card .el-card__header) {
    height: 10%;
}

.el-container:nth-child(2) :deep(.el-main .el-card .el-card__body) {
    padding: 5px;
    height: 90%;
}

.el-container:nth-child(2)
    :deep(.el-main:nth-of-type(2) .el-card .el-card__body) {
    padding: 0px;
}

.el-container:nth-child(2) :deep(.el-main .el-card .el-card__header > div) {
    height: 100%;
}

/* .el-container:nth-child(2) :deep(#myChart) {
    height: 100%;
} */

/* 部门人数统计 */
.el-container:nth-child(3) :deep(.el-card .el-card__header) {
    height: 15%;
}

.el-container:nth-child(3) :deep(.el-card .el-card__body) {
    height: 85%;
    padding: 0px;
}

.el-container:nth-child(3) :deep(.el-card .el-card__header > div) {
    height: 100%;
}
</style>