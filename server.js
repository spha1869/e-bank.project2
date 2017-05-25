var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');

var Contacts = [
    {
        id:1,
        name:'tom',
        number:'0735546862',
    },
    {
        id:2,
        name:'julia',
        number:'0634258895',
    }
];

var currentId=2;

var photos = [

];
var currentId = 2;

var songs = [];
var videos = [];
var PDF_files =[];
var PORT = process.env.PORT || 1337;

app.use(express.static(__dirname));

app.use(bodyParser.json());

app.get('/contacts', function(req, res) {
    res.send({products: Contacts});
});

app.get('/photos', function(req, res) {
    res.send({product: photos});
});

app.get('/Songs', function(req, res) {
    res.send({products: songs});
});

app.get('/Videos', function(req, res) {
    res.send({products: videos});
});

app.get('/PDF_files', function(req, res){
    res.send({products: PDF_files})
});

app.post('/contacts', function(req, res) {
    var contactName = req.body.name;
    currentId++;

    contant.push({
        id:cureentId,
        name:contactName
    });
    res.send('Succesful save contact');
});

app.put('/contacts/:id', function(req, res) {
    var id = req.params.id;
    var newName = req.body.newName;

    var found = false;

    products.forEach(function(product, index) {
        if(!found && product.id === number(id)) {
            product.name = newName;
        }
    });

    res.send('successfully updated contact!')
});

app.delete('/Contacts:id', function(req, res) {
    var id = req.params.id;

    var found = false;

    product.forEach(function(product, index) {
        if (!found && product.id === number(id)) {
            product.splice(index, 1);
        }
    });

    res.send('Contact successfully deleted')
});

app.listen(PORT, function() {
    console.log('server listen on ' + PORT);
}); 