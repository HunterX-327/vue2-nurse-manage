import _ from "lodash"

import debounce from "@/utils/debounce";

//封装每页的基础数据和方法
export const dataHandle = {
    /* 基础数据 */
    data() {
        return {
            /* header头部 */
            formData: {
                //搜索和选择部门数据
                department: "",
                search: "",
            },

            /* 表格操作 */
            pageSize: 10, //默认每页数量10
            //每页的数据
            tableData: [],
            
            //当前数据长度
            totalSize: 0,
            //搜索后的数据
            searchData: [],
        };
    },


    /* 基础方法 */
    methods: {
        //输入时 搜索表格内容
        handleSearchChange() {
            console.log("我来自mixins中的handleSearchChange函数，用于筛选数据")
            let value = this.formData.search;
            if (value.trim() == "") {
                //如果为空，则直接获取全部数据并到第一页
                this.changePage(0, this.pageSize);
                // this.handleCurrentChange(1);
            } else {
                console.log(
                    "🚀 ~ file: IntoNurse.vue:266 ~ handleSearchChange ~ value:",
                    value
                );
                //第一种方法 (indexOf)
                //否则筛选出名字 并赋值给this.searchData 之后执行handleCurrentChange(1);
                // this.searchData = this.total.filter(
                //     (data) => data.name.indexOf(value) !== -1
                // );
                //第二种方法 (includes)
                this.searchData = this.total.filter((data) =>
                    data.name.toUpperCase().includes(value)
                );
                // this.handleCurrentChange(1);
                this.changePage(0, this.pageSize);
            }
        },

        //改变每页的时候由footer调用
        changePage(start, end) {
            // console.log("我是intoNurse组件，我收到了Footer传来的数据", start);
            if (this.formData.search == "") {
                this.totalSize = this.total.length;
                this.tableData = this.total.slice(start, end); //从总数据中筛选
            } else {
                this.totalSize = this.searchData.length;
                this.tableData = this.searchData.slice(start, end);
            }
        },

        // 改变每页长度时由footer调用
        changeSize(pageSize) {
            this.pageSize = pageSize;
        },

        // 搜索框和部门框改变时由header组件调用
        changeFormData(formData) {
            console.log("我收到来着header的数据", formData);
        },

        debounce:function(fn,delay){
            let timer;
            return function(...args){
                let context = this;
                console.log("这是method中this的指向：",this)
                
                if(timer) clearTimeout(timer);
                timer = setTimeout(()=>{
                    fn.apply(context,args);
                },delay)
                console.log("这是debounce中的timer:",timer);
            }
        },

        //来自lodash库
        // debounceSearch:_.debounce(function(){
        //     console.log(this)
        //     this.handleSearchChange();
        // },300)

        //来自个人封装的debounce
        // debounceSearch:debounce.debounce(function () {  
        //     console.log("first")
        // },300)
    },

    /* 监听 */
    watch: {
        /* 监听search窗口 并触发search处理事件  */
        "formData.search": {
            handler(val) {
                // console.log("formData发生了改变", val.search);
                // this.searchWatch()

                // this.debounceSearch();

            },
        },
    },

    /* created钩子 */
    created(){
        //创建防抖
        // function debounce(fn,delay){
        //     let timer;
        //     return function(...args){
        //         let context = this;
        //         if(timer) clearTimeout(timer);
        //         timer = setTimeout(()=>{
        //             fn.apply(context,args);
        //         },delay)
        //     }
        // }

        // this.searchWatch = debounce(()=>{
        //     this.handleSearchChange();
        // },300)
    },

    /* mounted钩子 */
    mounted() {
        this.tableData = this.total.slice(0, 10);
        this.totalSize = this.total.length;
    },

    computed: {},
}