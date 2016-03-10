var express = require('express');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var app = express();
var db = mongojs('rodrigo-contatos', ['rodrigo-contatos']);
var db1 = mongojs('rodrigo-contatos', ['contatos']);

var contatos = db.collection('contatos');

app.use(express.static(__dirname + ""));
app.use(bodyParser.json());

app.get('/contatos', function(req, res){
console.log('i received a get request')

db.collection('contatos').find(function(err, docs){
	console.log(docs);
	res.json(docs);
});
});

app.get('/operadoras', function(req, res){
console.log('entrei no node para operadora');

db.collection('operadoras').find(function(err, docs){
	console.log(docs);
	res.json(docs);
});
});

app.post('/contactlist', function(req, res){
	console.log(req.body);
	db.contactlist.insert(req.body, function(err, doc){
		res.json(doc);
	});
});

app.delete('/contactlist/:id', function(req, res){
	var id = req.params.id;
db.contactlist.remove({_id: mongojs.ObjectId('id')}, function(err, doc){
	res.json(doc);
	});

});

app.get('/detalhesContato/:id', function(req, res){
	var id = req.params.id;
	console.log(id);
    contatos.findOne({_id: mongojs.ObjectId(id)}, function(err, doc){
	res.json(doc);

	});
});

app.put('/contactlist/:id', function(req, res){
	var id = req.params.id;
db.contactlist.findAndModify({query: {_id: mongojs.ObjectId(id)},
	update: {$set: {name: req.body.name, email: req.body.email, number: req.body.number}},
	new: true}, function(err, doc){
	res.json(doc);
	});
});

app.listen(3000);


console.log("server running on port 3000");
