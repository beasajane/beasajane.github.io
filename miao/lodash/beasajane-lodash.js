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
    return {
      chunk:chunk, 
    }
}()