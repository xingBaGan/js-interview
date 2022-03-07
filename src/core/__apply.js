export default function __apply(context = globalThis,args){
    context.fn = this
    let res = context.fn(...args)
    delete context.fn
    return res
}