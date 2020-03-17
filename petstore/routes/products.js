
var express = require('express');
var router = express.Router();

categories=[
    {"id":1,"name":"Alimento"},
    {"id":2, "name":"Higiene"},
    {"id":3, "name":"Limpeza"},
];

products=[
    {"id":1,"name":"Coleira", "descrição":"Coleira na cor preta com pinjente de ossinho prata.", "avaliacao":4,"preco":30.99, "categoria":"Acessorios"},
    {"id":2, "name":"Ração", "descrição":"Ração Canina, 18k. Para filhotes.", "avaliacao":3,"preco":100.10, "categoria":"Alimento"},
    {"id":3, "name":"Shampoo para gatos", "descrição":"Com delicioso cheirinho de amora, o Shampoo Pet Society Beeps Estopinha Gatos Extrato de Aveia vai tornar o banho do seu gatinho prático e rápido.", "avaliacao":1,"preco":20.00, "categoria":"Higiene"}
];
/* GET products list. */
router.get('/products', function(req, res, next) {
    res.json(products);
});

router.get('/categories', function(req, res, next){
    res.json(categories);
});

router.get('/productsByCategory/:category', function(req, res, next){
    let category = req.params.category;
    res.json(category);
});

module.exports = router;

