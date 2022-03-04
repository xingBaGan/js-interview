import __extend from "../src/core/__extend";
test.skip('smock', () => {
    function Person() {
        this.__proto__.sayHi = function () {
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