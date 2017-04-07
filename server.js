var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('showdebola', ['user', 'team']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/showdebola', function (req, res) {
  db.showdebola.find(function (err, docs) {
    res.json(docs);
  });
});

app.post('/adicionar', function (req, res) {
  db.showdebola.insert(req.query, function (err, doc) {
    res.json(doc);
  });
});

app.post('/adicionar/equipe', function (req, res) {
  db.equipe.insert(req.query, function (err, doc) {
    res.json(doc);
  });
});

app.listen(3000);
console.log("Escutando na porta 3000");