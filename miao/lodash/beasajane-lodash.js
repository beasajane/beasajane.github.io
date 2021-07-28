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
    function filter(array, f) {// f = iteratee(obj/ary/str)
      if(typeof f == 'function') {
        let ary = []
        for(let key of array) {
          if(f(key)) ary.push(key)
        }
        return ary
      }else {
        let str = ''
        str += f 
        let ary = str.split('/')
        let result = []
        for(let key of array) {
          if(key.includes(ary[1])) result.push(key)
        }
        return result
      }
    }
    function map(array, f) {
      let ary = []
      for(let i = 0; i < array.length; i++) {
        ary.push(f(array[i]))
      }
      return ary
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

    }
}()
