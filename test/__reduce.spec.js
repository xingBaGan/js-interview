import __reduce from '../src/core/__reduce'
Object.defineProperty(Array.prototype,'__reduce',{
  value:__reduce,
  enumerable:false    
})
test('smock',()=>{
  let a = [1,2,3,4,5]
  let sum = a.__reduce((acc,previousValue,index,array)=>{
    acc = acc +previousValue;
    return acc;
  },0)
  let sum2 = a.__reduce((acc,previousValue,index,array)=>{
    acc = acc +previousValue;
    return acc;
  })
  expect(sum).toEqual(15)
  expect(sum2).toEqual(15)
});
test('run promise in sequence',()=>{
    function runPromiseInSequence(arr,input){
        return arr.__reduce( 
            (promiseChain,currentFunction)=>promiseChain.then(currentFunction)
            ,Promise.resolve(input))
    }

    // promise function 1
function p1(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 5)
    })
  }
  
  // promise function 2
  function p2(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 2)
    })
  }
  
  // function 3  - will be wrapped in a resolved promise by .then()
  function f3(a) {
   return a * 3
  }
  
  // promise function 4
  function p4(a) {
    return new Promise((resolve, reject) => {
      resolve(a * 4)
    })
  }
  
const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
  .then((res)=>{
    expect(res).toEqual(1200)
  })   
})

test('pipe functions',()=>{
    // Building-blocks to use for composition
    const double = x => x + x
    const triple = x => 3 * x
    const quadruple = x => 4 * x
    // Function composition enabling pipe functionality
    const pipe = (...functions) => input => functions.__reduce(
        (acc, fn) => fn(acc),
        input
    )
    // Usage
    const multiply6 = pipe(double, triple)
    const multiply9 = pipe(triple, triple)
    const multiply16 = pipe(quadruple, quadruple)
    const multiply24 = pipe(double, triple, quadruple)
    expect( multiply6(6)).toEqual(36)
    expect( multiply9(9)).toEqual(81)
    expect( multiply16(16)).toEqual(256)
    expect( multiply24(10)).toEqual(240)
})