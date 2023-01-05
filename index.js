const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Amir')
})

app.listen(3000)