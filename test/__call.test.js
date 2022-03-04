import __call from "../src/core/__call";
test('smock', () => {
    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3
    };
    
    // ES5的写法
    let arr1 = [].slice.call(arrayLike); 
})
