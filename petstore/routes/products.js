
var express = require('express');
var router = express.Router();

categories=[
    "ALIMENTO", "HIGIENE", "ACESSORIOS"
];

products=[
    {"id":1,"name":"Coleira", "description":"Coleira na cor preta com pinjente de ossinho prata.", "rating":4,"price":30.99, "category":3},
    {"id":2, "name":"Ração", "description":"Ração Canina, 18k. Para filhotes.", "rating":3,"price":100.10, "category":1},
    {"id":3, "name":"Shampoo para gatos", "description":"Com delicioso cheirinho de amora, o Shampoo Pet Society Beeps Estopinha Gatos Extrato de Aveia vai tornar o banho do seu gatinho prático e rápido.", "rating":1,"price":20.00, "category":2}
];

favorites =[];
favorites.push(products[1]);

/* GET products list. */
router.get('/products', function(res) {
    res.json(products);
});

/* GET categories list. */
router.get('/categories', function(res){
    res.json(categories);
});

/* GET favorites list. */
router.get('/favorites', function(res){
    res.json(favorites);
});

/* GET products by category list. */
router.get('/products-by-category/:category', function(req, res){
    let category = req.params.category;
    productsByCategory = [];
    var id_category = (categories.indexOf(category.toLocaleUpperCase())+1);
    products.forEach(product => {
        if (product.category==id_category){
            productsByCategory.push(product)
        }
        
    });
    res.json(productsByCategory);
});

module.exports = router;
