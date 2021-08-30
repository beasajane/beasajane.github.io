function deadloop(time) {
  var start = Date.now()
  while(Date.now() - start < time) {}
}
for(var i = 0; i < 1000; i++) {
  deadloop(1000)
  console.log('a')
}