<!-- 全部人员 -->
<template>
    <el-card style="height:100%;box-sizing: border-box;">
        <ContentVue :total="total"></ContentVue>
    </el-card>
</template>

<script>
    /* 导入组件和mixins */
    import ContentVue from "./components/Content.vue";
    import _ from "lodash" //引入防抖库

    export default {
        name: "PersonAll",
        components: { ContentVue },
        data() {
            return {
                total: [
                    {
                        name: "张三",
                        sex: "男",
                        department: "市特警支队",
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
                    }
                ]
            }
        },

        methods: {
        },

        watch: {

        },

        mounted() {
        },
    };
</script>

<style scoped src="./assets/style.css">
</style>