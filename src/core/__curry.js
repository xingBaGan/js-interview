const FUNC_ERROR_TEXT = 'Expected a function';
/**
 * 
 * @param {Function} fn 被柯里化的函数
 * @param {Number} len 函数参数个数
 * @returns 结果 / 柯里化之后的函数
 * @example 
 * var abc = function (a, b, c) {
        return [a, b, c];
    };
    var curried = __curry(abc);
    expect(curried(1)(2)(3)).toEqual([1, 2, 3])
 */
export default function __curry(fn,len = fn.length) {
    if (!(typeof fn === 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT)
    }
    //len  为初始参数个数
  return _curry.call(this,fn,len)
}
/**
 * 
 * @param {Function} fn 被柯里化的函数
 * @param {Number} len 函数参数个数
 * @param  {...any} args 传入的参数
 * @returns 结果 / 柯里化之后的函数
 */
function _curry(fn,len,...args){
    //高阶函数
    return function(...params){
        //获取至今，参数个数
        let _args = [...args,...params]
        //如果参数个数够了，调用返回
        if(_args.length>=len){
            return fn.call(this,..._args)
        }else{
            //否则继续收集参数个数,将现有参数传入
            return _curry.call(this,fn,len,..._args)
        }
    }
}