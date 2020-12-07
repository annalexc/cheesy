var express         = require('express'),
    morgan          = require('morgan'),
    path            = require('path'),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    app             = express(),
    apiCheeseRouter = require('./server/routes/api/cheeses.js'),
    uri = process.env.MONGODB_URI || "mongodb://localhost/cheesy";

mongoose.connect( uri );


app.set('views', path.join(__dirname, 'client/views'));


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Set static file root folders
app.use(express.static('client'));
app.use(express.static('bower_components'));


app.use('/api/cheeses', apiCheeseRouter);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/views/index.html');
});


// process.env.PORT is needed for when we deploy to Heroku
var port = process.env.PORT || 8080;
app.listen( port, function() {
  console.log("8080!");
});
