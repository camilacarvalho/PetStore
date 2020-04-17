var express = require('express');
var router = express.Router();
var Product = require('../public/javascripts/model/product');
var products = require('../public/json/product.json');
var categories = require('../public/json/categories.json');

favorites = [];
favorites.push(products[1]);

/* GET categories list. */
router.get('/categories', function (req, res, next) {
  res.json(categories);
});

router.get('/', function (req, res) {

  let category = req.query.category;
  console.log(category);
  if(category==undefined){
    res.json(products);
  }else{
    productsByCategory = [];
    var id_category = (categories.indexOf(category.toUpperCase()) + 1);
    products.forEach(product => {
      if (product.category == id_category) {
        productsByCategory.push(product)
      }
    });
    res.json(productsByCategory);
  }
  
});

router.get('/:id', function (req, res) {

  let id = req.params.id;
  productForId={}
  products.forEach(product => {
    if(product.id==id){
      productForId=product;
    }
  });
  res.json(productForId);

});

module.exports = router;
