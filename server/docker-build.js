'use strict'
let fs = require('fs')

console.log('Change config file for docker linking...')

fs.readFile('./config.js', 'utf8', (err, data) => {
  if (err) {
    return console.log(err)
  }
  let result = data.replace(/localhost:27017/, 'mongodb:27017')
  fs.writeFile('./config.js', result, 'utf8', function (err) {
     if (err) return console.log(err)
  })
})

console.log('Config file changed successfully.');
