

var beasajane = function(){
    function chunk(array, size){
      let subary = Math.ceil(array.length / size) //chunk 数量
      //let ary = Array(subary).fill([]) []是一个对象
      let ary = Array(subary)
      for(let i = 0; i< subary; i++) {
        ary[i] = []
      }
      let count = 0 // 子项的第0个项
      let j = 0 //第0个子项
      for(let i = 0; i < array.length; i++) { // 遍历数组，将数组每一个数分别存到二元数组的子数组中
        ary[j][count] = array[i]
        count++ 
        if(count == size) { // 当子数中元素的数量== size，count重新计数， 子数组下标j +1
          count = 0
          j++
        }
      }
      return ary //return the new array of chunk
    }
    function indexOf(array, value, fromIndex = 0) {
      if(value !== value) {
        for(let i = fromIndex; i < array.length; i++) {
          if(array[i] !== array[i]) return i
        }
      }
      for(let i = fromIndex; i < array.length; i++) {
        if(array[i] === value) return i
      }
      return -1
    }
    function lastIndexOf(array, value, fromIndex = array.length - 1) {
      if(value !== value) {
        for(let i = fromIndex; i >= 0; i--) {
          if(array[i] !== array[i]) return i
        }
      }
      for(let i = fromIndex; i >= 0; i--) {
        if(array[i] === value) return i
      }
      return -1
    }
    function identity(...value) {
      if(value) {
        return value[0]
      }
    }
    // splice 通过索引删除元素
    function pull(array, ...values) {
      let ary = []
      for(let i = 0 ; i < array.length; i++ ) {
        while(true) {
          if(values.indexOf(array[i]) !== -1) {
            array.splice(i, 1)
            continue
          }
          break
        }
      }
      return array
    }
    function concat(array, ...values) {
      let ary = array.slice() // 创建并复制一份数组
      for(let i = 0; i < values.length; i++ ) {
        if(Array.isArray(values[i])) {
          for(let j = 0; j < values[i].length; j++) {
            ary.push(values[i][j])
          }
        }else {
          ary.push(values[i])
        }
      }
      return ary
    }
    function fill(array, value, start = 0, end = array.length) {
      for(let i = start; i < end; i++) {
        array[i] = value
      }
      return array
    }
    function remove(array, predicate) { // predicate（函数） invoked(调用)
      for(let i = 0; i < array.length; i++) {
        while(true) {
          if(predicate(array[i])) {
            array.splice(i, 1)
          }else {
            break
          }
        }
      }
      return array
    }
    function reverse(array) { //modify
      let l = array.length - 1
      for(let i = 0; i < l >> 1; i++) {
        swap(array, i , l - i)
      }
      return array
    }
    function swap(array, i, j) {
      let m = array[i]
      array[i] = array[j]
      array[j] = m 
      return array
    }
    function isSort(array) {
      for(let i = 0; i < array.length - 1; i++) {
        if(array[i] > array[i + 1]) return false
      }
      return true
    }
    function slice(array, start = 0, end = array.length) {
      let ary = []
      for(let i = start; i < end ; i++) {
        ary.push(array[i])
      }
      return ary
    }
    function iteratee(value) {//Creates a function that invokes func with the arguments of the created function. 
      return function(arg) {
        if(typeof value == 'string') {
          return arg[value]
        }
        if(Array.isArray(value)) {
          for(let i = 0; i < value.length; i += 2) {
            if(value[i + 1] !== arg[value[i]]) return false
          }
          return true
        }
        if(typeof value == 'object') {
          for(let key in value) {
            if(value[key] !== arg[key]) return false //这里需要深度对比
          }
          return true
        }
      }
    }
    // function isEqual(prap1, prap2) {
    //   if(Object.prototype.toString.call(prap1) === Object.prototype.toString.call(prap2) == '[object Object]') {
        
    //   }
    // }
    /* 
    var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
    ];
    filter(users, function)
    filter(users, { 'user': 'barney', 'active': true })
    filter(users,['user', 'fred'])
    filter(['abc', 'def'], /ef/)
  */
    function filter(array, f) {// f = iteratee(obj/ary/str)
      let result = []
      if(typeof f == 'function') { // f是函数  
        for(let key of array) {
          if(f(key)) result.push(key)
        } 
      }else if(typeof f == 'string'){  // f是字符串
        for(let key of array) {
          if(key[f]) result.push(key)
        }
      }else if(Array.isArray(f)){ // f是数组 ['user', 'fred'])
        for(let key of array) {
          if(key[f[0]] == f[1]) result.push(key)
        }
      }else if(Object.prototype.toString.call(f) === '[object Object]'){ // f是数组 ['user', 'fred'])
        let ary = Object.keys(f)
        for(let key of array) {
          for(let i = 0; i < ary.length; i++) {
            if(!key[ary[i]] || key[i] !== f[i]) break
            if(i == ary.length - 1) result.push(key)
          }
        }
      }else { // f是正则表达式
        for(let key of array) {
            if(key.match(f)) result.push(key)
        }
      }
      return result
    }
    function isEqual(val1,val2) { // 排除所有不成立的
      if(Object.prototype.toString.call(val1)  !== Object.prototype.toString.call(val2)) {
        return false
      }//类型不同一定不同
      if(Array.isArray(val1)) {
        if (val1.length !== val2.length) {
          return false
        }else {
          for (let i = 0; i < val1.length; i++) {
            if(!val2[i] || isEqual(val1[i] !== val2[i])) return false
          }
        }
      }
      if(Object.prototype.toString.call(val1) === '[object Object]') {
        if(Object.keys(val1).length === Object.keys(val2).length) {  //对比两个对象的属性组成的数组长度是否一样
          for(let i in val1) { // 对比两个对象的属性值 ,如果val2中不存在i，返回false，或者将两个属性值递归对比
            if(!val2[i] || !isEqual(val1[i], val2[i])) return false
          }
        }else {
          return false
        }
      }
      if(typeof val1 === 'string' && val1 !== val2) {
        return false
      }
      if(typeof val1 === 'number' && val1 !== val2) {
        if(val1 !== val1 && val2 !== val2) return true
        return false
      }
      if(typeof val1 === 'boolean'  && val1 !== val2) {
        return false
      }

      return true
    }
    function map(array, f) {
      let ary = []
      if(typeof f == 'function') {
        for(let i = 0; i < array.length; i++) {
          ary.push(f(array[i], i, array))
        }
      }else if(typeof f == 'string') {
        let ar = f.split('.') // f = 'a.b'  ar = ['a','b']
        for(let i = 0; i < array.length; i++) {
          let prop = array[i]
          for(let i = 0; i < ar.length; i++) {
            prop = prop[a[i]] // array[i][ar[0]][ar[1]]
          }
          ary.push( prop )
        }
      }
      return ary
    }
    function concat(array, ...values) { // 接收参数array ，values （array  or elements of array）
      let ary = array.slice()
      for(let i of values) {
        if(Array.isArray(i)) {
          for(let j of i) {
            ary.push(j)
          }
        }else {
          ary.push(i)
        }
      }
      return ary // 返回一个新的数组
    } 
    function difference(array, ...values) {
      let ary = array.slice()
      if(values.length == 1 && Array.isArray(values[0])) {
        values = values[0].slice()
      }
      for(let i = 0 ; i < values.length; i++) {
        let idx = array.indexOf(values[i])
        if(idx > -1 ) {
          ary.splice(idx, 1)
        }
      }
      return ary
    }
    function values(object) {
      let ary = []
      for(let key in object) {
        if(object.hasOwnProperty(key)) {
          ary.push(object[key])
        }
      }
      return ary
    }
    function keys(object) {
      let ary = []
      for(let key in object) {
        if(object.hasOwnProperty(key)) 
          ary.push(key)
      }
      return ary
    }
    function create(prototype, properties) {
      for(let i in properties) {
        
      }
    }
    function isArray(val) {
      if(Object.prototype.toString.call(val) == '[object Array]')
      // if(toString.call(val) == '[object Array]')
      return true
      return false
    }
    function gte(value, other) {
      return value >= other ? true : false
    }
    function isArguments(value) {
      if(toString.call(val) == '[object Arguments]') 
      return true
      return false 
    }
    return {
      chunk: chunk, 
      indexOf: indexOf,
      lastIndexOf: lastIndexOf,
      pull: pull, 
      concat: concat,
      fill: fill,
      remove: remove,
      reverse: reverse,
      swap: swap,
      isSort: isSort,
      slice: slice,
      iteratee: iteratee,
      filter: filter,
      map: map,
      isEqual: isEqual,
      concat: concat,
      difference:difference,
      values:values,
      keys:keys,
      isArray: isArray,
      gte:gte,
      isArguments:isArguments,
    }
}()
