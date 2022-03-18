import getBoxType from '../utils/getBoxType'
const FUNC_ERROR_TEXT = 'Expected a function';
export default function __bind(context = globalThis, ...outArgs) {
    if (!(getBoxType(this) === 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT)
    }
    //获取调用的函数
    let func = this;
    // 返回参数列表
    function newConstructor(...innerArgs){
        // console.info( 'newConstructor[type]:'+typeof newConstructor)
        //传入 new 操作符的this 始终指向 返回的对象
        if (this instanceof newConstructor) {
            func.call(this, ...outArgs,...innerArgs)
        } else {
            // 这里是作为普通函数调用
            func.call(context, ...outArgs,...innerArgs)
        }
    }
    newConstructor.prototype = this.prototype
    return newConstructor;
}