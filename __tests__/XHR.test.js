import XHR from '../src/core/XHR'
test('smock',async ()=>{
    // expect(XHR).toBeDefined();
    let res = await XHR('https://jsonplaceholder.typicode.com/todos/1')
    expect(res).toEqual( {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      })
})