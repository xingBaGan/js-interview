
test.skip('词法环境注册第一阶段1:先注册词法环境的变量 (包括,let,const)，之后进入第二阶段，注册参数与默认值',()=>{
    (function a(func,b){
        function func(){
            return b;
        }
        // const b = 7; 这里声明相同参数的函数，会被警告
        // let b = 7;
        expect(typeof func === 'function').toEqual(true);
        expect(func()).toEqual(7);

    })(3,4);
})

test('词法环境注册第二阶段2:注册函数，显然会去覆盖参数',()=>{
    (function a(func,b){
        var b = 7;
        function func(){
            return b;
        }
        expect(typeof func === 'function').toEqual(true);
        expect(func()).toEqual(7);

    })(3,4);
})

test('词法环境注册第二阶段3:块级作用域会去注册函数外的参数与块内的变量',()=>{
    var c = 14;
    (function a(func,b){
        var b = 7;
        function func(){
            return b;
        }
        // let b =4; 同一作用域重复命名显然不对
        try{
            expect(typeof func === 'function').toEqual(true);
            let b =4;
            expect(b).toEqual(4);
            expect(c).toEqual(14);
        }catch(e){
            console.error('块级作用域中重复命名！',e)
        }
        expect(typeof func === 'function').toEqual(true);
        expect(func()).toEqual(7);

    })(3,4);
})