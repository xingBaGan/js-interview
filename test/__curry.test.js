import __curry from "../src/core/__curry";
// import __curry from "../src/core/__curry";

test('smock',()=>{
    var abc = function (a, b, c) {
        return [a, b, c];
    };
    var curried = __curry(abc);
    expect(curried(1)(2)(3)).toEqual([1, 2, 3])
    expect(curried(1, 2)(3)).toEqual([1, 2, 3])
    expect(curried(1, 2, 3)).toEqual([1, 2, 3])

})
test('curry placeholders',()=>{
    var abc = function (a, b, c) {
        return [a, b, c];
    };
    var curried = __curry(abc);
    // Curried with placeholders.
    expect(curried(1)(_, 3)(2)).toEqual([1, 2, 3])
})