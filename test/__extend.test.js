import __extend from "../src/core/__extend";
test('smock', () => {
    function Person() {   
    }
    Person.prototype.sayHi = function () {
        return "hello"
    }
    function Ninja() { }
    __extend.call(Ninja, Person);
    let ninja = new Ninja();

    expect(ninja.sayHi()).toEqual("hello");
    expect(ninja instanceof Person).toEqual(true);
    expect(ninja instanceof Ninja).toEqual(true);
})

test.skip('constructor type validate', () => {
    class Person {
        constructor() { }
        sayHi() {
            return "hello"
        }
    }
    function Ninja() { }
    __extend.call(Ninja, Person);
    let ninja = new Ninja();
    expect(ninja.sayHi()).toEqual("hello");
    expect(ninja instanceof Person).toEqual(true);
    expect(ninja instanceof Ninja).toEqual(true);
})
test('multi extends', () => {
    class Person {
        constructor() { }
        sayHi() {
            return "hello"
        }
    }
    function Ninja() { 
    }
    
    Ninja.prototype.attack = function(){
        return "attack"
    }
    Ninja.prototype.hair = 'red';
    __extend.call(Ninja, Person);
    function HY(){}
    
    __extend.call(HY, Ninja);
    //必须放这里，否则会被__extend 给覆盖掉
    
    let hy = new HY();
    expect(hy.sayHi()).toEqual("hello");
    expect(hy.attack()).toEqual("attack");
    expect(hy.hair).toEqual("red");
    expect(hy instanceof Person).toEqual(true);
    expect(hy instanceof Ninja).toEqual(true);
})
test("lambda expression can't  be extended", () => {
    let Person = ()=>{};
    //诡异:lambda 不应该有原型
    // console.log(Person.prototype.constructor)
    Person.prototype.sayHi = function () {
        return "hello"
    }
    function Ninja() { }
    // expect( __extend.call(Ninja, Person)).toThrow();
     __extend.call(Ninja, Person)
    let ninja = new Ninja();
    expect(ninja.sayHi()).toEqual("hello");
    expect(ninja instanceof Person).toEqual(true);
    expect(ninja instanceof Ninja).toEqual(true);
})