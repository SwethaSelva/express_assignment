/**
 * 3. Create an Express.js app that outputs "Hello World!" when somebody goes to /home. 
    The port number will be provided to you by expressworks as the first argument of 
    the application, ie. process.argv[2]
 */
let express = require('express');
let app = express();
let port = process.argv[2]; 

app.get('/', (req, res) => {
  res.send('Hello, world!')
})


let server = app.listen(port, 'localhost', () => {
  let { address: host } = server.address();
  console.log('Connected and listening at http://%s:%s', host, port);
})