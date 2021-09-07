//提供若干数学函数   
// 具名导出
export function add(a,b) { //具名导出在声明的时候直接导出
  return a + b
}

export function mul(a,b) {
  return a * b 
}
// export var PI = 3.14159265358979323846264338294655189  
export var PI = 0.14159265358979323846264338294655189 + add(1, 2)
// setTimeout(() => {  //  import 不改变
//   PI = 41515
// }, 5000)


// 剧名导出在声明后导出需要加{}
function div(a, b) {
  return a / b
}
function sub(a, b) {
  return a - b
}
// export { div }
// export { sub }
export { div, sub }

export class SSR{

}


// 默认导出 不带名字
var a = 0
// setTimeout(() => {  //  import 不改变
//   a = 'faksd'
// }, 5000)
export default a
// export default 3








// export * from './foo.js'
// export {foo, bar} from './bar.js'