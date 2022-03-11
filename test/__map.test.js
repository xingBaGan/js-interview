import __map from "../src/core/__map";
Object.defineProperty(Array.prototype,'__map',{
    value:__map,
    enumerable:false    
})
test('smock',()=>{
    let a = [1,2,3];
    let double = (item,index,array)=>{
        expect(item).toEqual(array[index])
        return item*2;
    }
    let doubledArr = a.__map(double);
    expect(doubledArr).toEqual([2,4,6]) 
})

test('smock2',()=>{
    let a = [1,2,3];
    let double = (item,index,array)=>{
        expect(item).toEqual(array[index])
        return {
            age:item*2,
            name:item+index
        };
    }
    let doubledArr = a.__map(double);
    expect(doubledArr).toEqual(a.map(double)) 
})