import __call from "../src/core/__call";
import __apply from "../src/core/__apply";
import __bind from "../src/core/__bind";
Function.prototype.__call = __call
Function.prototype.__apply = __apply
Function.prototype.__bind = __bind
test('smock call', () => {
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    // ES5的写法
    let arr1 = [].slice.call(arrayLike, 1, 2);
    let res = [].slice.__call(arrayLike, 1, 2)
    expect(res).toEqual(arr1);
})

test('smock apply', () => {
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };

    // ES5的写法
    let arr1 = [].slice.apply(arrayLike, [1, 2]);
    let res = [].slice.__apply(arrayLike, [1, 2])
    expect(res).toEqual(arr1);
})

test('smock __bind', () => {
    function greet(greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
    }

    var object = { 'user': 'fred' };
    var bound = greet.bind(object, 'hi');
    // bound 只有一个参数了
    expect(bound('!')).toEqual('hi fred!');
    // Bound with placeholders.
    var bound2 = greet.bind(object, '', '?');
    //   bound2('hello');
    expect(bound2()).toEqual(' fred?');
})
test('smock __bind 2', () => {
    globalThis.x = 9;
    const module = {
        x: 81,
        getX: function () {
            return this.x;
        }
    };
    expect(module.getX()).toEqual(81);
    const retrieveX = module.getX;
    // undefined
    // expect( retrieveX()).toEqual(9);
    const boundGetX = retrieveX.bind(module);
    expect(boundGetX()).toEqual(81);
})
test(' __bind with new', () => {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function () {
        return `${this.x},${this.y}`;
    };
    const p = new Point(1, 2);
    expect(p.toString()).toEqual('1,2');
    //   const YAxisPoint = Point.bind(null, 0/*x*/);
    const emptyObj = {};
    // const YAxisPoint = Point.bind(emptyObj, 0/*x*/);
    const YAxisPoint = Point.__bind(emptyObj, 0/*x*/);
    const axisPoint = new YAxisPoint(5);
    const axisPoint1 = new YAxisPoint(10);
    expect(emptyObj).toEqual({})
    // expect(emptyObj).toEqual({x:5})
    expect(axisPoint.toString()).toEqual('0,5');
    expect(axisPoint1.toString()).toEqual('0,10');
    expect(axisPoint instanceof Point).toEqual(true);
    expect(axisPoint instanceof YAxisPoint).toEqual(true);
    expect(new YAxisPoint(17, 42) instanceof Point).toEqual(true);
})
