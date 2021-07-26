var Mymap = require('../chapter6-深入理解对象/myApi-面向对象练习/MyMap.js/')



 // mocha  语言 测试用例
function assert(flag) {
  if(!flag) {
    throw new Error('IsdFwe')
  }
}
describe( 'Constructor of MyMap', function () { 
  it('should return an instance of MyMap when called with new', () => {
    var m = new MyMap()
    assert(m instanceof MyMap) // 条件为false 报错
  })
  it('should return an instance of MyMap when called without new', () => {
    var m = new MyMap()
    assert(m instanceof MyMap) 
  })
})

describe( 'MyMap#methods', function () {  // mocha
  it('#set', () => {
    var m = new MyMap()
    m.set(1,2)
    assert(m.size == 1)
    assert(m.get(1) == 2)
  })
  it('#get', () => {
    var m = new MyMap()
    m.set(1,2)
    assert(m.size == 1)
    assert(m.get(1) == 2)
  })
  it('#delete', () => {
    var m = new MyMap()
    m.set(1,2)
    assert(m.size == 1)
    assert(m.get(1) == 2)
  })
})


describe('   ' , () => {
  describe('ds  ', () => {
    describe('das', () => {
      it('tiaojian') 
    })
  })
  describe('dsdsd', () => {

  })
})