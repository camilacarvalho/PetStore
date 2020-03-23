
var express = require('express');
var router = express.Router();

var Product = require('../public/javascripts/model/product');
var Basket = require('../public/javascripts/model/shopping_cart');

var product1 = new Product(1, "Coleira", "Coleira na cor preta com pinjente de ossinho prata.", 4, 30.99, 3);
var product2 = new Product(2,"Ração","Ração Canina, 18k. Para filhotes.",3,100.10,1);
var product3 = new Product(3,"Shampoo para gatos", "Com delicioso cheirinho de amora, o Shampoo Pet Society Beeps Estopinha Gatos Extrato de Aveia vai tornar o banho do seu gatinho prático e rápido.",1,20.00,2)
var product4 = new Product(4,"Ração para cachorro","Ração Heroi, 18k. Para adultos.",3,100.10,1);

var item1 = new Basket(1, product1, 1);
var item2 = new Basket(2, product2, 2);
var item3 = new Basket(3, product3, 3);
var item4 = new Basket(4, product4, 4);

shopping_cart = [ item1, item2, item3, item4 ];

/* GET shopping cart list. */
router.get('/', function (req, res, next) {
  res.json(shopping_cart);
});

/* POST shopping cart. */
router.post('/', function (req, res, next) {
  req.body.id = shopping_cart[shopping_cart.length-1].id+1;
  shopping_cart.push(req.body);
  res.json(req.body);
  res.status("201");
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
