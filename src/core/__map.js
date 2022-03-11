import getBoxType from "../utils/getBoxType";

let ARRAY_ERROR_TEXT = 'Expected a array'
// export default function __map(callback,thisArgs){
//     if (!(getBoxType(this)  === 'array')) {
//         throw new TypeError(ARRAY_ERROR_TEXT)
//     }
//     let mapped_data = [];
//     let data = this;
//     for(let i=0;i<data.length;i++){
//         mapped_data.push(callback.call(thisArgs,data[i],i,data));
//     }
//     return mapped_data;
// }
export default function __map(callback,thisArgs){
    if (!(getBoxType(this)  === 'array')) {
        throw new TypeError(ARRAY_ERROR_TEXT)
    }
   return this.reduce((acc,current,index,array)=>{
       acc[index] = callback.call(thisArgs,current,index,array);
       return acc
   },[])
}