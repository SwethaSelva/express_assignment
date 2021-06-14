/**
  8. Pug Template Engine
    Create an Express.js app with a home page rendered by the Pug template engine.
    The home page should respond to /home.
    We use 'toDateString()' to simply return the date in a human-readable format without the time.

 */

let express = require('express');
let app = express();
let port = process.argv[2] || 8080;
let fName = process.argv[3] || 'index.pug';

app.set('views', __dirname+'/'+'templates');
app.set('view engine', 'pug');

app.get('/home', (req, res) => {
    let date = new Date();
    res.render(fName, { date: date.toDateString() })
})

app.listen(port);