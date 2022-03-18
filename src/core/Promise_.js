export default function Promise_(executor) {
    // 构造函数指向创建得对象
    this.status = "pending"
    this.pendingCallback = [];
    this.value = undefined
    this.reason = undefined
    let resolve = (data) => {
        this.status = "resolved"
        this.value = data
    }
    let reject = (error) => {
        this.status = "rejected"
        this.reason = error
    }
    try{
        executor(resolve, reject)
    }catch(e){
        reject(e)
    }
}
Promise_.prototype.then = function (onFulfilled,onRejected) {
    if(this.status === "resolved"){
          this.value = onFulfilled(this.value)
    }
    // this.__handlePending(onFulfilled);
    return this;   
}
Promise_.prototype.catch = function (onRejected) {
    if(this.status === "rejected"){
        onRejected(this.reason)
    }
    // this.__handlePending(onRejected);
    return this;   
}
Promise_.prototype.__handlePending = function(callback){
    if(this.status == 'pending'){
        this.pendingCallback.push(()=>{
            this.then(callback)
        })
        this.pendingCallback.push(()=>{
            this.catch(callback)
        })
        requestAnimationFrame(()=>{
            this.pendingCallback&&this.pendingCallback.forEach((callback)=>{
                callback.call(this)
            },this)
        })
    }
    return this;
}
