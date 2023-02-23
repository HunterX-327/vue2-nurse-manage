<template>
    <el-col :span="6">
        <el-card :body-style="{height:'100%'} " shadow="always">
            <el-row :gutter="20" type="flex" align="middle" style="height:100%">
                <el-col :span="6">
                    <!-- <img src="../../assets/members.png" alt /> -->
                    <slot name="img">...img默认信息</slot>
                </el-col>
                <el-col :span="8" :offset="2">
                    <!-- <span>总人数</span>
                    <span>2,200</span>-->
                    <slot name="infoLeft" :info="information">...info1默认信息</slot>
                </el-col>
                <el-col :span="8">
                    <!-- <span>看护人数</span>
                    <span>2,200</span>-->
                    <slot name="infoRight" :info="information">...info2默认信息</slot>
                </el-col>
            </el-row>
        </el-card>
    </el-col>
</template>

<script>
export default {
    name: "TitleCard",
    data() {
        return {
            information: {
                person: {
                    total: 2020,
                    nurseNumber: 323,
                },
                member: {
                    isMember: 2020,
                    notMember: 10,
                },
                sex: {
                    male: 2020,
                    female: 2020,
                },
                department: {
                    number: 500,
                },
            },
        };
    },
};
</script>

<style scoped>
.el-col {
    height: 100%;
}

.el-row :deep(.el-col) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.el-row :deep(.el-col span:nth-child(1)) {
    color: #a1a3a9;
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 5px;
}

.el-row :deep(.el-col span:nth-child(2)) {
    font-size: 13px;
    font-weight: bold;
}

.el-card {
    height: 100%;
}

.el-row :deep(.el-col:nth-child(1) img) {
    width: 60%;
}
</style>