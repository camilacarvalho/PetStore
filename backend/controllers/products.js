let products = require('../public/json/product.json');
let categories = require('../public/json/categories.json');

favorites = [products[1]];

exports.get_categories = function (req, res, next) {
    res.json(categories);
}

exports.all_items = function (req, res) {
    let category = req.query.category;
    console.log(category);
    if(category==undefined){
      res.json(products);
    }else{
      productsByCategory = [];
      const id_category = (categories.indexOf(category.toUpperCase()) + 1);
      products.forEach(product => {
        if (product.category == id_category) {
          productsByCategory.push(product)
        }
      });
      res.json(productsByCategory);
    }
}

exports.get_item = function (req, res) {
    let id = req.params.id;
    productForId={}
    products.forEach(product => {
      if(product.id==id){
        productForId=product;
      }
    });
    res.json(productForId);
}