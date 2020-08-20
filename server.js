const express = require('express')
const app = express()
var cors = require('cors');
var fs = require('fs');
var path = require('path');
const bodyParser = require("body-parser");

const port = process.env.PORT || 3150
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/', function(request, response) {
  console.log('POST /')
  console.dir(request.body)
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.end('thanks')
})
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => res.sendFile(path.join(__dirname+'/public/home.html')));

        
app.listen(port, () => console.log(`Example app listening on port ${port}!`))