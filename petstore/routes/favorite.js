var express = require('express');
var router = express.Router();
var Product = require('../public/javascripts/model/product');
var Favorite = require('../public/javascripts/model/favorite');

const product2 = new Product(2, "Ração", "Ração Canina, 18k. Para filhotes.", 0, 100.00, "Alimento", "https://araujo.vteximg.com.br/arquivos/ids/3897061-1000-1000/07896015605193.jpg?v=636796038206100000")
const product3 = new Product(3, "Shampoo para gatos", "Com delicioso cheirinho de amora, o Shampoo Pet Society Beeps Estopinha Gatos Extrato de Aveia vai tornar o banho do seu gatinho prático e rápido.", 1, 20.00, "Higiene", "https://www.petlove.com.br/images/products/198418/product/Shampoo_Pet_Society_Beeps_Estopinha_Gatos_Extrato_de_Aveia_1932461.jpg?1556467127")
const product4 = new Product(4, "Gaiola", "Gaiola Passarinho com Poleiro Nº04 Sabiá Canario Curió - Gaiolas confiança.", 2, 100.00, "Acessorios", "https://images.tcdn.com.br/img/img_prod/727275/gaiola_trinca_ferro_arco_macho_79_1_20191030112340.jpg")
const product5 = new Product(5, "Bebedouro para gatos", "Fonte para gato. 1l.", 4, 80.00, "Acessorios", "https://http2.mlstatic.com/D_NQ_NP_659667-MLB31210163453_062019-W.jpg")
const product6 = new Product(6, "Ração para peixes", "Ração para peixes de aquario. 20g.", 5, 73.00, "Alimento", "https://a-static.mlcdn.com.br/618x463/racao-para-peixes-de-aquario-alcon-basic-alimento-completo-em-flocos-para-peixes-20g/agropesc/535839/f649b1325a7e4b91e649d699655ea938.jpg")
const product7 = new Product(7, "Ossinho de brinquedo", "Brinquedo de borracha para mastigar.", 5, 14.65, "Brinquedos", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAcsGXnWUxZ7jIRIxevpzzG2MB1LfeU0IARYWKGpyz-m_-aIe4GHXlANfd9g_APHsVSH_tjnslWgWDJnewmYwtZ_prBx-dp9LPF0ATQ_3Tdxm1kNgPErm8&usqp=CAE")

favorites=[product2,product3, product4, product5, product6, product7];

/* GET favorites list. */
router.get('/', function (req, res, next) {
  res.json(favorites);
});

/* POST favorite. */
router.post('/', function (req, res, next) {
  req.body.id = favorites[favorites.length-1].id+1;
  favorites.push(req.body);
  res.json(req.body);
  res.status("201");
});

/* DELETE favorite. */
router.delete('/:id', function(req, res, next){
  var id = req.params.id;
  remove_favorite(id);
  res.json(this.favorites);
  res.status("204");
});

router.post('/move-basket/:id', function(req, res, next){
  var id = req.params.id;
  var product = remove_favorite(id);
  //add a lista de basket
  
});

function remove_favorite (id) {
  var product;
  for( var i = 0; i < favorites.length; i++){ 
    if(favorites[i].id==id){
      product = favorites.splice(i,1);
    }
  }
  return product;
};

module.exports = router;
