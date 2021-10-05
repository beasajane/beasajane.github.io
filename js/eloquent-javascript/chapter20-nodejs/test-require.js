// var chunk = require('lodash/chunk')
// var yargs = require('yargs')
var figlet = require('figlet')

figlet.text('hello world', (err, result) => {
  console.log(result)
})