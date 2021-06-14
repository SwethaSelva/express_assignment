#!/usr/bin/env node

/**
 * 4. Make a Node.js program named express-hello-world.js that outputs "Hello World" to browsers making a GET request to the root (/) url.
  Also, to browsers that make a GET request to the /time url, send the current date and time in ISO format:2015-12-31T23:59:59.999Z.
  Finally, use an environment variable named PORT for the port number if one is provided. If one is not provided use 8080.
  i.e. The command below should start a server on the port 1337.
    PORT=1337 node express-hello-world.js
  and the command below should start a server on the port 8080.
    node express-hello-world.js
 */
let express = require('express');
let app = express();
let port = process.env.PORT || 8080;
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/time', (req, res) => {
  res.send(new Date());
});

let server = app.listen(port, 'localhost', () => {
  let { address: host } = server.address();
  console.log('Connected and listening at http://%s:%s', host, port);
})