/**
 * 9. JSON
    Write a server that, when it receives a GET, reads a file, parses it to JSON, and responds with that content to the user.
    The server should respond to any GET that matches the /books resource path. 
    As always, the port is passed in process.argv[2].
    The file to read is passed in process.argv[3].
    Respond with: res.json(object)
    Everything should match the /books resource path.
 */

let express = require('express');
const fs = require('fs');
let app = express();
let port = process.argv[2] || 8080;
let fName = process.argv[3] || 'person.json';

app.get('/', (req, res) => {
    fs.readFile(__dirname+'/books/' +fName, (err, data) => {
        if (err) res.send({ err })
        let obj = JSON.parse(data)
        console.log({ obj })
        res.json(obj);
    });
});

app.listen(port);