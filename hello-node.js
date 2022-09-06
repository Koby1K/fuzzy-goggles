const express = require('express')
const app = express()
const path = require("node:path");
const bodyParser = require('body-parser')

console.log('hello from node');

app.get('/', function (req, res) {

  // res.sendFile(path.join(__dirname, 'index.html'));
  // res.send('Hello World from Express')

  app.use(bodyParser.json())
  app.use(bodyParser.)

})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
