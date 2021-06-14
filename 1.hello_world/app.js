/**
 * 1. Make a hello world Express program that will display \"Hello, world!\" at the root URL: /
 */
let express = require('express');
let app = express();
let port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, world!')
})


let server = app.listen(port, 'localhost', () => {
  let { address: host } = server.address();
  console.log('Connected and listening at http://%s:%s', host, port);
})