const express = require('express')
const app = express()

console.log('hello from node');

app.get('/', function (req, res) {
  // res.send('Hello World from Express')

  res.sendFile(path.join(__dirname, 'index.html'));

})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
