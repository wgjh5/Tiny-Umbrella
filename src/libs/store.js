// 中介
let lyex = {
    store: {
        position: '温哥华',
        skill: ['jsx', 'ts'],
        name: "lllll",
        show:"",
        activeChange:"",
        toggleChildren:""
    },
    // 事件队列
    list: {},
    // 监听
    // 把函数放进队列里面，但是函数是不触发的
    on(key, fn) {
        // 如果有则继续加队列
        if (!this.list[key]) {
            // 没有创建新的队列
            this.list[key] = [];
        }
        this.list[key].push(fn);
    },
    // 触发
    emit(key, param) {
        // 取出队列
        let fns = this.list[key];
        // 遍历更改仓库的值
        for (let p in param) {
            this.store[p] = param[p]
        }
        // 触发数组中的回调函数
        fns.forEach(fn => {
            // 获取参数并执行
            fn(param);
        });
    }
}

export default lyex