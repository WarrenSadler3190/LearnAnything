var express = require('express')
    ,stylus = require('stylus')
    ,logger = require('morgan')
    ,bodyparser = require('body-parser')
    ,mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || "development";

var app = express();

function compile(str,path) {
  return stylus(str).set('filename',path);
}


//View Engine and Static Dirs
app.set('views', __dirname + '/server/views');
app.set('view engine','jade');
app.use(logger('dev'));
app.use(bodyparser.urlencoded({
  extended:true
}));
app.use(bodyparser.json());
app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
));
app.use(express.static(__dirname + '/public'));

//Mongoose and MongoDB
mongoose.connect('mongodb://localhost/learnanything');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error...'));
db.once('open',function(){
  console.log('learnanything db is open');
});

//Test Message Schema
var messageSchema = mongoose.Schema({
  message:String
});
var Message = mongoose.model('Message',messageSchema);
var mongoMessage;
Message.findOne().exec(function(err,doc){
  mongoMessage = doc.message;
});


//Routes
app.get('/partials/:partialPath',function(req,res){
  res.render('partials/' + req.params.partialPath);
})

app.get('*',function(req,res){
  res.render('index',{mongoMessage:mongoMessage});
});

//Port Config
var port = process.env.PORT || 3030;
app.listen(port);
console.log('Listening on port: ' +  port + '...');