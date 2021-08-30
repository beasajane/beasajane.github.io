



this.addEventListener('message', (e) => {
  console.log('开始计算', e.data, '是不是素数')
  for(var i = 0; i < e.data; i++) {
    postMessage(false)
    return 
  }
  postMessage(true)
})