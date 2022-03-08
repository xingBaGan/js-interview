import copyShallow from "../src/core/__copyShallow";
import copyDeep from "../src/core/__copyDeep";

Object.defineProperty(Object.prototype,'copyShallow',{
    value:copyShallow,
    enumerable:false    
})
Object.defineProperty(Object.prototype,'copyDeep',{
    value:copyDeep,
    enumerable:false    
})
test.skip('smock',()=>{
    let mother = {
        name:'jack',
        age:24,
        cook:function(){
            return "delicious food";
        },
        scores:[188,99,100]
    }
    let source = {
        name:'jack',
        age:24,
        mother:mother,
        eat:function(){
            return 'eat happy'
        },
        scores:[88,99,100]
    }
    let clone = {};
    let clone2 = {};
    expect(clone.copyShallow(source)).toEqual(source)
    expect(clone).toEqual(source)
    // 拷贝的是同个对象
    expect(clone.mother).toEqual(mother)
    expect(clone.mother).toBe(mother)
    expect(clone.eat).toBe(source.eat)
    expect(Object.assign(clone2,source)).toEqual(source)
    console.log('拷贝之后的:',clone,clone2)
})
test('smock',()=>{
    let mother = {
        name:'jack',
        age:24,
        cook:function(){
            return "delicious food";
        },
        scores:[188,99,100]
    }
    let source = {
        name:'jack',
        age:24,
        mother:mother,
        eat:function(){
            return 'eat happy'
        },
        scores:[88,99,100]
    }
    let clone = {};
    let clone2 = {};
    expect(clone.copyDeep(source)).toEqual(source)
    expect(clone.copyDeep(source)).toStrictEqual(source)
    expect(clone.mother).toEqual(mother)
    expect(Object.is(clone.mother,mother)).toBe(false)

    expect(clone.eat === source.eat).toBe(false)
    
})