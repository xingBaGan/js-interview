import __new from "../src/core/new";
test.skip('smock',()=>{
    function Person(name){
        this.name=name;
        this.age=21;
        this.__proto__.sayHi = function(){
            return "hello"
        }
     }
     let name = 'jack';
     let age = 21
     let obj = __new(Person,name,age);
     expect(obj.name).toEqual(name)
     expect(obj.age).toEqual(age)
     expect(obj instanceof Person).toEqual(true);
     expect(obj.__proto__).toEqual(Person.prototype);
     expect(obj.sayHi()).toEqual("hello");
})