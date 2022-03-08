import __curry from "../src/core/__curry";
const _ = __curry.placeholder
describe.skip('函数柯里化',()=>{
    test('smock', () => {
        var abc = function (a, b, c) {
            return [a, b, c];
        };
        // 柯里化的函数，之后可以使用 curry 写法。实际上并不减少需要调用的参数个数，
        // 只是共用相同参数函数的简便写法。一定程度上减少了函数重载
        let placeholder = {};
        var curried = __curry(abc,placeholder);
        expect(curried(1, 2, 3)).toEqual([1, 2, 3])
        expect(curried(1)(2)(3)).toEqual([1, 2, 3])
        // expect(curried()).toEqual([1, 2, 3])
        expect(curried(1, 2)(3)).toEqual([1, 2, 3])
    })
    
    test('placeholder', () => {
        let fn = function (a, b, c, d, e) {
            return [a, b, c, d, e];
        }
        let placeholder = {}; // 定义占位符
        let _fn = __curry(fn,placeholder); // 将函数柯里化，指定所需的参数个数，指定所需的占位符 
        expect(_fn(1, placeholder, 3, 4, 5)(2)).toEqual([1,2,3,4,5]);              
    })
    test('curry placeholders', () => {
        var abc = function (a, b, c) {
            return [a, b, c];
        };
        var curried = __curry(abc, _);
        // Curried with placeholders.
        expect(curried(1)(_, 3)(2)).toEqual([1, 2, 3])
    })
    test('curry placeholders2', () => {
        let fn = function (a, b, c, d, e) {
            return [a, b, c, d, e];
        }
        let _fn = __curry(fn,_); // 将函数柯里化，指定所需的参数个数，指定所需的占位符
        expect(_fn(1, 2, 3, 4, 5)).toEqual([1,2,3,4,5]);                 
        expect(_fn(_, 2, 3, 4, 5)(1)).toEqual([1,2,3,4,5]);              
        expect(_fn(1, _, 3, 4, 5)(2)).toEqual([1,2,3,4,5]);              
        expect(_fn(1, _, 3)(_, 4, _)(2)(5)).toEqual([1,2,3,4,5]);         
        expect(_fn(1, _, _, 4)(_, 3)(2)(5)).toEqual([1,2,3,4,5]);        
        expect(_fn(_, 2)(_, _, 4)(1)(3)(5)).toEqual([1,2,3,4,5]);        
    })
})