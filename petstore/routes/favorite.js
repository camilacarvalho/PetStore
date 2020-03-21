var express = require('express');
var router = express.Router();

favorites=[  { "id": 2, "name": "Ração", "description": "Ração Canina, 18k. Para filhotes.", "rating": 3, "price": 100.10, "category": 1 },
];

/* GET favorites list. */
router.get('/', function (req, res, next) {
  res.json(favorites);
});

/* POST favorite. */
router.post('/', function (req, res, next) {
req.body.id = products.length
products.push(req.body);
res.json(req.body);
res.status("201");
});

/* DELETE favorite. */
router.delete('/:id', function(req, res, next){
//remove by id
});


//mover para o carrinho



module.exports = router;
