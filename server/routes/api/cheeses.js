var express = require('express');
var router = express.Router();
var Cheese = require('../../models/cheese');


// GET ALL THE CHEESE!
router.get('/', function(req, res, next){
  Cheese.find({}).sort({createdAt: -1}).exec(function(err, cheeseData){
    console.log(cheeseData);
    if (err) {
      res.status(404).end();
    }else {
      res.json( cheeseData );
    }
  });
});


// GET CHEESES using query params
router.get('/search', function(req, res, next){
  var source = req.query.source;
  var type = req.query.type;
  var country = req.query.country;
  console.log(source)

  if (source && type && country){
    Cheese.find({milk_source: source, type: type, country: country}, function(err, response){
      if (err) {
        res.status(404).end();
      }else {
        res.json(response);
      }
    })
  } else if ( source && type ){
    Cheese.find({milk_source: source, type: type}, function(err, response){
      if (err) {
        res.status(404).end();
      }else {
        res.json(response);
      }
    })
  } else if ( source && country ){
    Cheese.find({milk_source: source, country: country}, function(err, response){
      if (err) {
        res.status(404).end();
      }else {
        res.json(response);
      }
    })
   } else if ( type && country ){
    Cheese.find({type: type, country: country}, function(err, response){
      if (err) {
        res.status(404).end();
      }else {
        res.json(response);
      }
    })
  } else if ( source ){
    Cheese.find({milk_source: source}, function(err, response){
      if (err) {
        res.status(404).end();
      }else {
        res.json(response);
      }
    })
  }

});


// GET SINGLE CHEESOURCE
router.get('/cheese/:id', function(req, res, next){
  var id = req.params.id;
  Cheese.findById(id, function(err, response){
    if (err) {
      res.status(404).end();
    }else {
      res.json(response);
    }
  })
});





// GET ALL MILK SOURCES
router.get('/getdistinct/:attribute', function(req, res, next){
  var attr = req.params.attribute;
  Cheese.find().distinct(attr, function(err, response){
    if (err) {
      res.status(404).end();
    }else {
      res.json(response);
    }
  })
});




// GET CHEESES FOR A GIVEN MILK SOURCE
router.get('/source/:source', function(req, res, next){
  var source = req.params.source;
  Cheese.find({milk_source: source}, function(err, response){
    if (err) {
      res.status(404).end();
    }else {
      res.json(response);
    }
  })
});




// POST NEW cheese
router.post('/', function(req, res, next){
  console.log(req.body);
  if (!req.body.cheese) {
    res.status(422).end();
  }else {
    cheese.create(req.body.cheese, function(err, cheeseData){
      res.json(cheeseData);
    });
  };
});


// PUT
router.put('/:id', function(req, res, next){
  console.log('Updating!!!!!!!');
  var id = req.params.id;
  cheese.findByIdAndUpdate(id, req.body.cheese, function(err, cheese){
    if (!req.body.cheese) {
      res.status(422).end();
    } else {
      res.status(204).end();
    };
  });
});


// DELETE
router.delete('/:id', function(req, res, next){
  var id = req.params.id;
  cheese.findByIdAndRemove(id, function(err){
    if (err) {
      res.status(500).end();
    }else {
      res.status(204).end();
    }
  })
});


module.exports = router;
