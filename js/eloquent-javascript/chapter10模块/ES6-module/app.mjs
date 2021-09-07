// import export 语句只能出现在模块代码的顶层
// 导出的模块的名字必须是静态的，即后面的字符串不是能计算出来看
// 通过导入语句创建的变量是不可赋值的，相当于const声明的变量
// 具名导入创建的变量根其在原模块中的变量是绑定在一起的， 原模块中变量改变了，导入变量也会改变



import{ add, mul } from './my-math.mjs'  // 导入具名导出 必须用导出的名字来接变量

// 导入具名导出并重命名
import {sub as substract, div as division } from './my-math.mjs'


// 导出所有导出时 名字随意
// 其中默认导出在default属性上,具名导出在对应的属性名上
// 改变了指向模块对象
import * as myMath from './my-math.mjs' // 将该文件的所有的具名函数都导出作为名为myMath对象的属性


//default as  xxx  默认导出和具名导出一起
import xxx, {div, sub} from './my-math.mjs' 



// 导入默认导出 名字可以随意
import abc from './my-math.mjs'  // 默认导入 导出的是个值
// setInterval(() => {
  //   console.log(abc)
  // }, 1000);

  console.log(abc)
  
  
  console.log(myMath.sub(5, myMath.div(6,2)))

// 具名导入 与具名导出的 变量绑定，不是与变量的值绑定
  import {PI as pi } from './my-math.mjs'
  // setInterval(() => {
  //   console.log(pi)
  // }, 1000);


  console.log(add(myMath.PI, mul(4, 3)))
  console.log(division(5, substract(12, 3)))
  console.log(myMath)
  
  
  
  
  const a = 8  
  // a不能独立放在等号的左边 ； a = 99 （X） 即不能被赋值
  const b = {}  
  // 变量指向的对象不能变，但不代表对象自身的值不能变