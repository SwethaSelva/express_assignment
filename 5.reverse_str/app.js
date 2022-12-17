/**
 * 5. This exercise will teach you how to process the traditional (non-AJAX) web form.
    Write a route ('/form') that processes HTML form input 
    (<form><input name="str"/></form>) and responds with the value of str backwards.
 */
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let port = process.argv[2] || process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }))

// Basic operations
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/year', (req, res) => {
  let { age } = req.query;
  if (!age) res.send('Please, send your age in the url');
  else {
    let currentYear = new Date().getFullYear();
    res.send(`You were born  in ${currentYear - age}`);
    console.log({ req: req.query })
  }
})
app.get('/time', (req, res) => {
  res.send(new Date());
});

// Form data
app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/form.html')
})
app.post('/form', (req, res) => {
  let reverse = req.body.str.split('').reverse().join('');
  res.send(reverse);
});

// Display file
app.use('/public', express.static(__dirname + '/public'));
app.get('/', function (req, res){
  res.sendFile(__dirname+'/public/index.html')
});

// Use template engine
let fName = process.argv[3] || 'index.pug';
app.set('views', __dirname+'/'+'templates');
app.set('view engine', 'pug');
app.get('/home', (req, res) => {
  res.render(fName, { date: new Date().toDateString() })
})

// Use JSON data
let dataFileName = process.argv[3] || 'person.json';
app.get('/books', (req, res) => {
  fs.readFile(__dirname+'/books/' + dataFileName, (err, data) => {
    if (err) res.send({ err })
    let obj = JSON.parse(data)
    res.json(obj);
  });
});

let server = app.listen(port, 'localhost', () => {
  let { address: host } = server.address();
  console.log('Connected and listening at http://%s:%s', host, port);
})