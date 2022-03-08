const FUNC_ERROR_TEXT = 'Expected a function';
 const PLACEHOLDER = {};
 __curry.placeholder = PLACEHOLDER
/**
 * 
 * @param {Function} fn 被柯里化的函数
 * @param {any} placeholder 占位符
 * @param {Number} len 函数参数个数
 * @returns 结果 / 柯里化之后的函数
 * @example 
 * var abc = function (a, b, c) {
        return [a, b, c];
    };
    var curried = __curry(abc);
    expect(curried(1)(2)(3)).toEqual([1, 2, 3])
 */
export default function __curry(fn,placeholder = PLACEHOLDER,len = fn.length) {
    if (!(typeof fn === 'function')) {
        throw new TypeError(FUNC_ERROR_TEXT)
    }
    //len  为初始参数个数
  return _curry.call(this,fn,placeholder,len)
}
/**
 * 
 * @param {Function} fn 被柯里化的函数
 * @param {any} placeholder 占位符
 * @param {Number} len 函数参数个数
 * @param  {...any} args 之前cache 的函数
 * @returns 结果 / 柯里化之后的函数
 * @example
 * let fn = function (a, b, c, d, e) {
        return [a, b, c, d, e];
    }

    // let _ = {}; // 定义占位符
    let _fn = __curry(fn,_); // 将函数柯里化，指定所需的参数个数，指定所需的占位符 
    expect(_fn(1, _, 3, 4, 5)(2)).toEqual([1,2,3,4,5]);              
    expect(_fn(1, _, 3)(_, 4, _)(2)(5)).toEqual([1,2,3,4,5]);
 */
function _curry(fn,placeholder,len,...args){
    //高阶函数
    return function(...params){
        //每次调用一次__curry 过的函数就会新建缓存并且存入
        /**
         * 1.将 placeholder 当作普通参数存入
         * 2.之后每次的参数填入【_curry化函数调用】，都先看前面是否可以填入。
         * 能填则填，否则push 到 _args 列表中.
         * 3.直到参数列表填满位置
         */
        //step 1 2
        for(let i =0;i<args.length;i++){
            if(args[i] === placeholder){
                let front =  params.shift();
                if(front === undefined) break;
                args[i] = front;
            }
        }
        let _args = [...args,...params];
        //如果参数个数够了，调用返回
        if(_args.length>=len &&_args.every((arg) =>arg!==placeholder)){
            return fn.call(this,..._args)
        }else{
            //否则继续收集参数个数,将现有参数传入
            return _curry.call(this,fn,placeholder,len,..._args)
        }
    }
}