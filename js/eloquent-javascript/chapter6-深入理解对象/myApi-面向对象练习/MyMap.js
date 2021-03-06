
  function MyMap() {//一一映射
    this._keys = []
    this._values = []
  } // 当new一个构造函数的时候，该构造函数的prototype已经被设置完毕

  MyMap.prototype.forEach = function (iterator) { // iterator 迭代器 函数
    for(var i = 0; i < this._keys.length; i++) {
      var key = this._keys[i]
      var val = this._values[i]
      iterator(val, key) 
    }
  }

  //获取key 在 _keys 中的下标，能够正确处理NaN
  MyMap.prototype._keyIndex = function (key) {
    if(key !== key) { // 当key 为NaN
      // for(let i = 0; i < this._keys.length; i++) {
      //   if(this._keys[i] !== this._keys[i]) 
      //   return i
      // }
      return this._keys.findIndex(it => it !== it) 
    }else {
      return this._keys.indexOf(key)
    }
  }
  MyMap.prototype.set = function(key, value) { //设置一个值的映射,如果有该映射，就重新设置key的映射值value值
    if(this.has(key)) { //如果key存在，替换其值
      // this._values[this._keys.indexOf(key)] = value
      var idx = this._keyIndex(key)
      this._values[idx] = value
    }else {
      this._keys.push(key)
      this._values.push(value)
    }
    return this
  }
  MyMap.prototype.get = function(key) { //得到一值的映射
    var idx = this._keyIndex(key)
    if(idx >= 0) {
      return this._values[idx]
    }
    // else {
    //   return undefined
    // }
  }
  MyMap.prototype.has = function(key) { //查看一个值有没有映射
    return this._keys.includes(key)
  }
  MyMap.prototype.delete = function(key) { //删除一个值及其映射
    var idx = this._keyIndex(key)
    if(idx >= 0) {
       this._values.splice(idx,1)
       this._keys.splice(idx,1)
       return true
    }
    return false
  }
  MyMap.prototype.clear = function() { //清空映射数组
    this._keys.length = 0
    this._values.length = 0
  }
  Object.defineProperty(MyMap.prototype, 'size', {
    get : function () {
      return this._keys.length
    }
  })
