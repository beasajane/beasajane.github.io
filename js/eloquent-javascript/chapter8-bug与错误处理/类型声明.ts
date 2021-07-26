// 静态类型： 变量指向值的类型是提前确定 （c,c++,java,rust)
// 动态类型：变量指向的值的类型可以在运行时发生变化(js,python)


// 强类型： 运算中值的类型不能自动转换 (python,java)
// 弱类型：运算中值的类型允许自动转换（js,c)

// 静态分析： 在不运行代码的情况下分析代码


// TS 静态类型的语言        变量类型，表达式类型
function repeat(a: string, b: number): string {  // js 的扩展，要兼容js自身的语法
  var result = ''; // 自动推导出result的类型 ，无法推导，需要加 类型
  for( var i = 0; i < b; i++) {
    result += a
  }
  return result
}
// number[][] 二维数组
var x = 8 // 自动判断，x的类型为number
// x = repeat('da', 3)

// number[] 由数字组成的数组

// Ts 代码 最终会被转成 JS 运行  浏览器不认识TS代码  运行的是js代码


window.name = '3' 