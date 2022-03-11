import getBoxType from "../utils/getBoxType";
let ARRAY_ERROR_TEXT = 'Expected a array'
export default function __reduce(callback,initialValue){
    if (!(getBoxType(this)  === 'array')) {
        throw new TypeError(ARRAY_ERROR_TEXT)
    }
    //todo 回调函数判断
    let data = this;
    if(initialValue === undefined&&data.length){
        initialValue = data[0]
        data.shift();
    }
    let previousValue = initialValue;
    for(let i=0;i<data.length;i++){
        previousValue = callback(previousValue,data[i],i,data);
    }
    return previousValue;
}