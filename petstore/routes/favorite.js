var express = require('express');
var router = express.Router();
var Product = require('../public/javascripts/model/product');
var Favorite = require('../public/javascripts/model/favorite');


var product1 = new Product(1, "Coleira", "Coleira na cor preta com pinjente de ossinho prata.", 4, 30.99, 3);
var product2 = new Product(2,"Ração","Ração Canina, 18k. Para filhotes.",3,100.10,1);
var product3 = new Product(3,"Shampoo para gatos", "Com delicioso cheirinho de amora, o Shampoo Pet Society Beeps Estopinha Gatos Extrato de Aveia vai tornar o banho do seu gatinho prático e rápido.",1,20.00,2)

var favorite1 = new Favorite(1, product1);
var favorite2 = new Favorite(2, product2);
var favorite3 = new Favorite(3, product3);

favorites=[favorite1, favorite2, favorite3];

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
