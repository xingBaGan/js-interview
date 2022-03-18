
import EventBus from '../src/patterns/eventBus'
test('smock on', () => {
    let renderTimes = 0;
    var fn1 = ()=>{
        renderTimes ++;
    }
    const e = new EventBus();
    // fn1 fn2
    e.on('e1', fn1)
    e.emit('e1') // fn1() fn2()
    e.emit('e1') // fn1()
    expect(renderTimes).toEqual(2);
    e.off('e1', fn1)
    e.emit('e1') // null
    expect(renderTimes).toEqual(2);
})

test('smock on2', () => {
    let renderTimes = 0;
    var fn1 = ()=>{
        renderTimes ++;
    }
    const e = new EventBus();
    // fn1 fn2
    e.on('e1', fn1)
    e.on('e1', fn1)
    e.emit('e1') // fn1() fn2()
    e.emit('e1') // fn1()
    expect(renderTimes).toEqual(2);
    e.off('e1', fn1)
    e.emit('e1') // null
    expect(renderTimes).toEqual(2);
})
test('smock once', () => {
    let warningRemind = false;
    var fn2 = ()=>{
        warningRemind = !warningRemind;
    }
    
    const e = new EventBus();
    // fn1 fn2
    e.once('e1', fn2)
    e.emit('e1');
    expect(warningRemind).toEqual(true);
    e.emit('e1');
    expect(warningRemind).toEqual(true);
    expect(e.off('e1', fn2)).toEqual(undefined);
    expect(()=>{e.off('e1')}).toThrow();
})