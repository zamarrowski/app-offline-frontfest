'use strict'
let fs = require('fs')

let file = './app/settings.js'
fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    return console.log(err)
  }
  var result = data.replace(/localhost:8080/, '54.154.96.152:8080')
  fs.writeFile(file, result, 'utf8', function (err) {
     if (err) return console.log(err)
  })
})

console.log('Config files changed successfully.');
