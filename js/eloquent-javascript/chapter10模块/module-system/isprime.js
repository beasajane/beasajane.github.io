function isPrime(n) {
  for(var i = 2; i < n / 2; i++) {
    if( n % 2 == 0) {
      return false 
    }
  }
  return true
}

var b = require('b.js')  // 同步访问拿不到东西

console.log('show b1 in is-prime.js', b)

setTimeout(() => {
  console.log('show b2 in is-prime.js', b)
}, 1000);

exports.isPrime = isPrime
// module.exports = isPrime
