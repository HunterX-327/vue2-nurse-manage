<template>
    <el-card style="height:100%;box-sizing: border-box;">
        <!-- Content组件 -->
        <ContentVue :total="total"></ContentVue>
    </el-card>
</template>

<script>
    //引入组件
    import ContentVue from "./components/Content.vue";

    export default {
        name: "OnJobPerson",
        components: { ContentVue },
        data() {
            return {
                total: [
                    {
                        name: "王老五",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    }, {
                        name: "李四",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    },
                    {
                        name: "王老五",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    }, {
                        name: "王老五",
                        sex: "女",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    }, {
                        name: "王老五",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    }, {
                        name: "张三",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    },
                    {
                        name: "李四",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    },
                    {
                        name: "王老五",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    },
                    {
                        name: "李四",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    },
                    {
                        name: "王老五",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    }, {
                        name: "张三",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    },
                    {
                        name: "李四",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    },
                    {
                        name: "王老五",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    },
                    {
                        name: "李四",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    },
                    {
                        name: "王老五",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    }, {
                        name: "张三",
                        sex: "男",
                        department: "县特警支队",
                        birthday: "1997/12/04",
                        age: 22,
                        nativePlace: "江西省赣州市",
                        isPartyMember: "是",
                        status: "在岗"
                    },
                ]
            }
        },
    };
</script>

<style scoped src="./assets/style.css">

</style>