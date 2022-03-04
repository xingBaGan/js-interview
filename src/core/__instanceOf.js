const NOT_CONSTRUCTOR_TEXT = 'Expected a constructor';
export default function __instanceOf(Parent){
    // 检测Parent是否为构造函数
    if(!(typeof Parent === 'function'&&Parent.prototype.constructor == Parent)){
        throw new TypeError(NOT_CONSTRUCTOR_TEXT)
    }
    let __proto__ = this.__proto__;
    //可能传入不是对象
    while(__proto__){
        if(__proto__ === Parent.prototype){
            return true;
        }
        __proto__ =  __proto__.__proto__;
    };
    return false;
}