const NOT_CONSTRUCTOR_TEXT = 'Expected a constructor';
export default function __extend(Parent){
    // 检测是否为构造函数
    if(!(typeof Parent === 'function'&&Parent.prototype.constructor == Parent)){
        throw new TypeError(NOT_CONSTRUCTOR_TEXT)
    }
    let __proto__ =  new Parent();
    // 赋值
    for(let key in this.prototype){
        __proto__[key] = this.prototype[key] 
    }
    //this 为子类，或者说为子构造函数
    this.prototype = __proto__;
    //构造函数的原型 constructor 必须指向 构造函数
    Object.defineProperty(this.prototype,"constructor",{
        enumerable:false,
        writable:true,
        value:this
    })
}