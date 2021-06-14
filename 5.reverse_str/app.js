/**
 * 5. This exercise will teach you how to process the traditional (non-AJAX) web form.
    Write a route ('/form') that processes HTML form input 
    (<form><input name="str"/></form>) and responds with the value of str backwards.
 */
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/form.html')
})
app.post('/form', (req, res) => {
  let reverse = req.body.str.split('').reverse().join('');
  res.send(reverse);
});

let server = app.listen(port, 'localhost', () => {
  let { address: host } = server.address();
  console.log('Connected and listening at http://%s:%s', host, port);
})