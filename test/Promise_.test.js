
import Promise_ from '../src/core/Promise_'
test.skip('smock 链式调用',()=>{
    let p = new Promise_(function(resolve, reject) {
        resolve(10);
    });
    
    p.then(function(value) {
        expect(value).toEqual(10);
        return value*2;
    }).then((res)=>{
        expect(res).toEqual(20);
    })
})
test('smock 异步调用',()=>{
    let p = new Promise_(function(resolve, reject) {
        setTimeout(()=>{
            resolve(10);
        },2000)
    });
    let i =0;
    setInterval(()=>{
        p.then(function(value) {
            console.log('不执行这个！？')
            expect(value).toEqual();
        })
    },1000)
})
// test('smock 链式调用2',()=>{
//     let p = new Promise_(function(resolve, reject) {
//        setTimeout(()=>{
//            let rand = Math.random()*10
//            if(rand<5){
//                resolve(rand)
//            }else{
//                reject("error"+rand)
//            }
//        },1000)
//     });
    
//     p.then(function(value) {
//         console.info(value)
//     }).catch((e)=>{
//         console.error(e)
//     })
// })