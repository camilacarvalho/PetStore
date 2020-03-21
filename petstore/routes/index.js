var express = require('express');
var router = express.Router();

categories = [
  "ALIMENTO", "HIGIENE", "ACESSORIOS"
];

products = [
  { "id": 1, "name": "Coleira", "description": "Coleira na cor preta com pinjente de ossinho prata.", "rating": 4, "price": 30.99, "category": 3 },
  { "id": 2, "name": "Ração", "description": "Ração Canina, 18k. Para filhotes.", "rating": 3, "price": 100.10, "category": 1 },
  { "id": 3, "name": "Shampoo para gatos", "description": "Com delicioso cheirinho de amora, o Shampoo Pet Society Beeps Estopinha Gatos Extrato de Aveia vai tornar o banho do seu gatinho prático e rápido.", "rating": 1, "price": 20.00, "category": 2 }
];

favorites = [];
favorites.push(products[1]);

/* GET categories list. */
router.get('/categories', function (req, res, next) {
  res.json(categories);
});


/* GET products by category list. 
router.get('/products-by-category/:category', function (req, res, next) {
  let category = req.params.category;
  productsByCategory = [];
  var id_category = (categories.indexOf(category.toLocaleUpperCase()) + 1);
  products.forEach(product => {
    if (product.category == id_category) {
      productsByCategory.push(product)
    }
  });
  res.json(productsByCategory);
});
*/

router.post('/', function(req, res){
  req.body.id = products.length
  products.push(req.body);
  res.json(req.body);
  res.status("201");
});

router.put('/:id', function(req, res){
  var id = req.params.id;
  req.body.id = id;
  products[id]=req.body;
  res.json(req.body);
  res.status("200");
});

/* GET products list.
com a possibilidade de filtrar por categoria
http://localhost:3000/?category=higiene
*/
router.get('/', function (req, res) {
  //res.json(products);
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
