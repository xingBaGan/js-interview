import getBoxType from "../utils/getBoxType";
function __copyDeep(target,origin){
    for(let item in origin) {
        if(typeof target[item] === 'object'&& target != null){
            target[item] =  __copyDeep(Array.isArray(target[item])?[]:{},target[item])
        }else if(typeof target[item] === 'function'){
            //过于复杂不做处理
            target[item] = origin[item]
        }else{
            target[item] = origin[item]
        }
    };
    return target;
}
export default function copyDeep(origin){
    return __copyDeep.bind(this,this)(origin);
}