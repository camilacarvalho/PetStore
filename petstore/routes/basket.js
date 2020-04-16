
var express = require('express');
var router = express.Router();

var shopping_cart = require('../public/json/basket.json');

/* GET shopping cart list. */
router.get('/', function (req, res, next) {
  res.json(shopping_cart);
});

function containsProductInBasket(id){
  for (let index = 0; index < shopping_cart.length; index++) {
    const item = shopping_cart[index].product;
    if (item.id === id) {
        return true;
    }
}
return false;
}

/* POST shopping cart. */
router.post('/', function (req, res, next) {
  //req.body.id = shopping_cart[shopping_cart.length-1].id+1;
  console.log(req.body.id);
  if(!containsProductInBasket(req.body.id)){
  shopping_cart.push(req.body);
  res.json(req.body);
  res.status("201");
  }
});
  
/* DELETE shopping cart. */
router.delete('/:id', function(req, res, next){
  var id = req.params.id;
  remove_basket(id);
  res.json(this.shopping_cart);
  res.status("204");
});

function remove_basket (id) {
  var product;
  for( var i = 0; i < shopping_cart.length; i++){ 
    if(shopping_cart[i].id==id){
      shopping_cart.splice(i,1);
    }
  }
  return product;
}

router.post('/move-favorite/:id', function(req, res, next){
  var id = req.params.id;
  var product = remove_basket(id);
  //add a lista de basket
  
});

module.exports = router;
