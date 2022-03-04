const FUNC_ERROR_TEXT = 'Expected a function';
/**
 * 
 * @param {Function} Constructor 
 * @param  {...any} args 
 * @returns Object
 * @example
 *  function Person(name){
        this.name=name;
        this.age=21;
     }
     let name = 'jack';
     let age = 21
     let obj = __new(Person,name,age);
 */
export default function __new(Constructor,...args){
    if(!(typeof Constructor === 'function'&&Constructor.prototype!=='null')){
        throw new TypeError(FUNC_ERROR_TEXT)
    }
    //创建对象，并且将原型指向构造函数的原型链
    /**
     * 等价于 let a = {}; a.prototype = Constructor.prototype
     */
    let instance = Object.create(Constructor.prototype);
    Constructor.call(instance,...args);
    return instance;
}