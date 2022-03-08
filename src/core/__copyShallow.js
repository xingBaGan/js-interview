function __copyShallow(target,origin){
    for(let item in origin) target[item] = origin[item];
    return target;
}
export default function copyShallow(origin){
    return __copyShallow.bind(this,this)(origin);
}