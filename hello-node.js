const express = require('express')
const app = express()

console.log('hello from node');

app.get('/', function (req, res) {
  res.send('Hello World from Express')
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
