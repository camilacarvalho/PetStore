
var express = require('express');
var router = express.Router();

var shopping_cart = require('../public/json/basket.json');

/* GET shopping cart list. */
router.get('/', function (req, res, next) {
  res.json(shopping_cart);
});

function contains(id) {
  return shopping_cart.some(basket => basket.id == id);
}

/* POST shopping cart. */
router.post('/', function (req, res, next) {
  if (!contains(req.body.id)) {
    shopping_cart.push(req.body);
  }
  res.json(req.body);
  res.status("201");
})

router.put('/:id', function(req, res, next){
  var id = req.params.id;
  console.log(req.body);
  console.log(shopping_cart);
  for (var i = 0; i < shopping_cart.length; i++) {
    if (shopping_cart[i].id == id) {
      shopping_cart[i]=req.body;
    }
  }
  console.log(shopping_cart);
  res.json(req.body);
  res.status("200");
});

/* DELETE shopping cart. */
router.delete('/:id', function (req, res, next) {
  var id = req.params.id;
  remove_basket(id);
  res.json(shopping_cart);
  res.status("204");
});

router.delete ('/', function(req, res, next){
  shopping_cart.splice(0,shopping_cart.length);
  res.json(shopping_cart);
  res.status("204");
})

function remove_basket(id) {
  var product;
  for (var i = 0; i < shopping_cart.length; i++) {
    if (shopping_cart[i].id == id) {
      shopping_cart.splice(i, 1);
    }
  }
  return product;
}

module.exports = router;
