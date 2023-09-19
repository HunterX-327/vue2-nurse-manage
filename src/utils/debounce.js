export default {
    debounce:function(fn,delay){
        let timer;
        return function(...args){
            let context = this;

            console.log("封装debounce的this：",this)
            
            if(timer) clearTimeout(timer);
            timer = setTimeout(()=>{
                fn.apply(context,args);
            },delay)
            console.log("debounce中的timer:",timer);
        }
    },
}