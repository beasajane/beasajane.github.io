// 命令行加法
//  命令行参数 跟在命令后面的 数据都为参数，以空格分卡  
// console.log(process.argv)

var a = Number(process.argv[2])
var b = Number(process.argv[3])
console.log(a + b)
// $ node add.js 234 456 --888 --999
// [
//   'C:\\Program Files\\nodejs\\node.exe',  // node 路径
//   'E:\\learn\\js\\eloquent-javascript\\chapter20-nodejs\\add.js',  // add.js  路径
//   '234',
//   '456',
//   '--888',
//   '--999'
// ]