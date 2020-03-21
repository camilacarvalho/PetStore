
var express = require('express');
var router = express.Router();

shopping_cart = [{ "id": 1, "name": "Coleira", "description": "Coleira na cor preta com pinjente de ossinho prata.", "rating": 4, "price": 30.99, "category": 3 }];

/* GET shopping cart list. */
router.get('/', function (req, res, next) {
  console.log(shopping_cart);
  res.json(shopping_cart);
});

/* POST shopping cart. */
router.post('/', function (req, res, next) {
  req.body.id = products.length
  products.push(req.body);
  res.json(req.body);
  res.status("201");
});
  
/* DELETE shopping cart. */
router.delete('/:id', function(req, res, next){
  //remove by id
});

//move for favorite
module.exports = router;
