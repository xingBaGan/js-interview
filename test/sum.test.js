import sum from "../src/demo/sum";
test.skip('test',()=>{
    expect(sum(3,4)).toEqual(7);
})