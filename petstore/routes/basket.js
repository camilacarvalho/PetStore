
var express = require('express');
var router = express.Router();

var Product = require('../public/javascripts/model/product');
var Basket = require('../public/javascripts/model/shopping_cart');

var product1 = new Product(1, "Coleira", "Coleira na cor preta com pinjente de ossinho prata.", 4, 30.99, "Acessorios", "https://www.petelegante.com.br/media/catalog/product/c/o/coleira_preta-pingente_1.jpg");
var product2 = new Product(2,"Ração","Ração Canina, 18k. Para filhotes.",3,100.10, "Alimento", "https://araujo.vteximg.com.br/arquivos/ids/3897061-1000-1000/07896015605193.jpg?v=636796038206100000");
var product3 = new Product(3,"Shampoo para gatos", "Com delicioso cheirinho de amora, o Shampoo Pet Society Beeps Estopinha Gatos Extrato de Aveia vai tornar o banho do seu gatinho prático e rápido.",1,20.00,"Higiene", "https://www.petlove.com.br/images/products/198418/product/Shampoo_Pet_Society_Beeps_Estopinha_Gatos_Extrato_de_Aveia_1932461.jpg?1556467127");
var product4 = new Product(4, "Gaiola", "Gaiola Passarinho com Poleiro Nº04 Sabiá Canario Curió - Gaiolas confiança.", 2, 100.00, "Acessorios", "https://images.tcdn.com.br/img/img_prod/727275/gaiola_trinca_ferro_arco_macho_79_1_20191030112340.jpg")

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
