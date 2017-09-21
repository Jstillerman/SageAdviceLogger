// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var fs = require('fs')
var moment = require('moment')

module.exports = function submit(data){
  data.forEach(person => {
    fs.appendFile(person.file, sanitize(person.entry), function(err){
      if (err) throw err
      console.log(person.name+"'s data has been logged")
    })
  })
}


function sanitize(text){
  text = moment().format("MMM Do YY") + '\n' + text + '\n'
  return text
}
