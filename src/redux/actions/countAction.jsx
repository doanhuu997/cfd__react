import {COUT_DECREMENT ,COUT_INCREMENT} from './type'
export function increment(step)
{
    return{ type :COUT_INCREMENT ,payload: step}
}
export function decrement(step)
{
    return {type :COUT_DECREMENT,payload :step}
}