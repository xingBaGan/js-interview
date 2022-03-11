import __flat from '../src/core/__flat'
Array.prototype.__flat = __flat
test('smock', () => {
    const arr1 = [0, 1, 2, [3, 4]];
    const arr2 = [0, 1, 2, [[[3, 4]]]];
    expect(arr1.__flat()).toEqual([0, 1, 2, 3, 4])
    expect(arr2.__flat(1)).toEqual([0, 1, 2, [3, 4]])
    let a = [1, [2, 3, [4, [5]]]]; //4 维数组
    expect(a.__flat(Infinity)).toEqual([1, 2, 3, 4, 5])
})

