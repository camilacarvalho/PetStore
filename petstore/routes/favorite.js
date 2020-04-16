var express = require('express');
var router = express.Router();
var Product = require('../public/javascripts/model/product');
var favorites = require('../public/json/favorites.json');

/* GET favorites list. */
router.get('/', function (req, res, next) {
  res.json(favorites);
});

/* POST favorite. */
router.post('/', function (req, res, next) {
  req.body.id = favorites[favorites.length-1].id+1;
  favorites.push(req.body);
  res.json(req.body);
  res.status("201");
});

/* DELETE favorite. */
router.delete('/:id', function(req, res, next){
  var id = req.params.id;
  remove_favorite(id);
  res.json(this.favorites);
  res.status("204");
});

router.post('/move-basket/:id', function(req, res, next){
  var id = req.params.id;
  var product = remove_favorite(id);
  //add a lista de basket
  
});

function remove_favorite (id) {
  var product;
  for( var i = 0; i < favorites.length; i++){ 
    if(favorites[i].id==id){
      product = favorites.splice(i,1);
    }
  }
  return product;
};

module.exports = router;
