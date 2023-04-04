

//数据导入相关状态管理
export default{
    //开启命名空间
    namespaced: true,

    //actions操作
    actions:{
        checkFile(context,value){
            console.log("checkFile的actions")
            return new Promise((resolve,reject)=>{
                const isExcel = /\.(xlsx|xls)$/.test(value.name.toLowerCase());
                if (!isExcel) {
                    let fileInfo = { name: value.name, state: "invalid" };
                    context.commit("ADDFILERSULT",fileInfo)
                    reject("只能上传excel文件")
                }else{
                    resolve("验证成功");
                }
            })
        }
    },

    mutations:{
        ADDFILERSULT(state,value){
            state.fileResult.push(value);
        },

        ADDFILELIST(state,value){
            state.fileList.push(value);
        }
    },

    state:{
        fileResult: [],
        
        //文件数据
        fileList: [
            {
                name: "food.jpeg",
                url: "",
                isUpload: true,
            },
            {
                name: "food2.jpeg",
                url: "",
                isUpload: false,
            },
        ],
    },

    getters:{

    },
}