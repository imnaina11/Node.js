var http = require('http');
var fs = require('fs');
var express = require('express');
var fileUpload = require('express-fileupload');
var app = express();
var server = http.createServer(app);


 
// default options 
app.use(fileUpload());
 
app.post('/upload', function(req, res) {
 
    if (!req.files) {
        res.send('No files were uploaded.');
        return;
    }
 
    var sampleFile = req.files.fileUpload;
    console.log(sampleFile);
    

    sampleFile.mv(__dirname + '/images/cards.jpg', function(err) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.send('File uploaded!');
        }
    });
});


server.listen(8001)