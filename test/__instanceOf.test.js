import __instanceOf from "../src/core/__instanceOf";

describe('my instance test',()=>{
    Object.prototype.__instanceOf = __instanceOf
    test('smock',()=>{
        function Person(name){
            this.name=name;
            this.age=21;
            this.__proto__.sayHi = function(){
                return "hello"
            }
         }
         let name = 'jack';
         let age = 21
         let obj = new Person(name,age)
         expect(obj.name).toEqual(name)
         expect(obj.age).toEqual(age)
         expect(obj.__instanceOf(Person)).toEqual(true);
         expect(obj.sayHi()).toEqual("hello");
    })
    
    test('multi instance of',()=>{
        class Person {
            constructor() { }
            sayHi() {
                return "hello"
            }
        }
        class Ninja extends Person{
            attack(){
                return "attack"
            }
        }
        let obj = new Ninja();
         expect(obj.__instanceOf(Person)).toEqual(true);
        //  expect(obj.__instanceOf(Ninja)).toEqual(true);
         expect(obj.sayHi()).toEqual("hello");
         expect(obj.attack()).toEqual("attack");
    })
})
