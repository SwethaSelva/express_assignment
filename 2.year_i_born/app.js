/**
 2. Tell the year you were born Make an express program that will display the year you were born when you report your age in a query parameter. When you type in
  http://localhost:3000/year?age=32
  into the address bar of your browser, for example, it will display You were born in 1984.
  Reference: https://scotch.io/tutorials/use-expressjs-to-get-url-and-post-parameters
 */
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.get('/year', (req, res) => {
  let { age } = req.query;
  if (!age) res.send('Please, send your age in the url');
  else {
    let currentYear = new Date().getFullYear();
    res.send(`You were born  in ${currentYear - age}`);
    console.log({ req: req.query })
  }
})


let server = app.listen(3000, 'localhost', () => {
  let { address: host } = server.address();
  console.log('Connected and listening at http://%s:%s', host, port);
})