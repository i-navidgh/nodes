const express = require('express')
const app = express()

let users = require('./users')
console.log(users)
global.config = require('./config')

app.use(express.static(__dirname + "/public"))

app.get('/:username', function (req, res){
  console.log(req.params)
  res.send(`Hello ${req.query.username}`)
})

app.listen(config.port, ()=>{
  console.log(`server is running on port ${config.port}`)
})
////////comment
