/**
  7. Shopping List
    We will be building a simple application where we will store a shopping list. You should use an array to store your items in the shopping list. Our application should have the following routes:
    1. GET /items - this should render a list of shopping items.
    2. POST /items - this route should accept form data and add it to the shopping list.
    3. GET /items/:id - this route should display a single item's name and price
    4. PATCH /items/:id, this route should modify a single item's name and/or price
    5. DELETE /items/:id - this route should allow you to delete a specific item from the array.
*/

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let items = require('./items.json');

// View engine setting
app.set('view engine', 'ejs');

// serve static file
app.use('/assets', express.static(__dirname+'/assets'));
app.use(bodyParser.urlencoded({ extended: false }));

// CRUD
app.get('/items', (req, res) => {
  res.json(items);
  res.render('index.ejs', { items });
});

app.get('/items/:id', (req, res) => {
  let { id } = req.params;
  let newItem = items.filter(item => item.id === +id); // param id string to number
  res.json(newItem);
  res.render('index.ejs', { items: newItem });
});

app.post('/items', function (req, res) {
  let addItem = req.body;
  items.unshift({ id: items.length, ...addItem });
  res.json(items)
  res.render('index.ejs', { items });
});

app.patch('/items/:id', (req, res) => {
  let newItem = req.body;
  let id = +req.body.id - 1;
  items[id] = newItem;
  res.json(items);
});

app.delete('/items/:id', (req, res) => {
  let { id } = req.params;
  items = items.filter(item => item.id !== +id); // param id string to number
  res.json(items);
  res.render('index.ejs', { items });
});
app.listen(8080);