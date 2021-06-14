/**
 * 6. Create a Express server that uses static files. Place an index.html, an image and a css file in a directory named public.
    Use the index.html to display the photo and some caption text in red or another color using css.
 */

let express = require('express');
let app = express();

// app.set();
app.use('/public', express.static(__dirname + '/public'));
app.get('/', function (req, res){
   res.sendFile(__dirname+'/public/index.html')
});

app.listen(8080);