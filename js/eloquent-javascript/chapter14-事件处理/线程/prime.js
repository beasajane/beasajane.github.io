addEventListener('message', (e) => {
  console.log('收到数据', e.data)
  e.data.x++
  postMessage(e.data)
})