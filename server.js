const express = require('express')
const fs = require('fs');
var path = require('path');
var app = express();
var http = require('http').Server(app);
const port = 1338

app.use(express.static(path.join(__dirname, 'assets/js')))
app.use('/lib', express.static(path.join(__dirname, 'assets/js/lib')))
app.use(express.static(path.join(__dirname, 'dist')))
app.use('/ezcheatclient/dist/css', express.static(path.join(__dirname, 'dist/css')))
app.use('/ezcheatclient/assets/js', express.static(path.join(__dirname, 'assets/js')))
app.use('/ezcheatclient/assets/img', express.static(path.join(__dirname, 'assets/img')))
app.use('/ezcheatclient/assets/fonts', express.static(path.join(__dirname, 'assets/fonts')))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

http.listen(port, () => console.log(`listening at http://localhost:${port}`))