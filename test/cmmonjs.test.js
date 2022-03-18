

let {count,friends,getFriends,plusCount,getCount} = require('../src/demo/commonModule')

test('值导入测试',()=>{
    expect(count).toEqual(1);
    plusCount()
    expect(count).toEqual(1);
    plusCount()
    expect(count).toEqual(1);
})
test('引用导入测试',()=>{
    for(let i=0;i<3;i++){
        friends.push(i);
    }
    expect(friends).toEqual([0,1,2]);
    expect(friends).toEqual([0,1,2]);
    expect(getFriends()).toEqual([0,1,2]);
})

describe('module 状态被共享，造成问题',()=>{
    test('共享内存，函数导入测试',()=>{
        expect(count).toEqual(1);
        plusCount()
        expect(getCount()).toEqual(4);
        plusCount()
        expect(getCount()).toEqual(5);
    })
})