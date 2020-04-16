var express = require('express');
var router = express.Router();
var Product = require('../public/javascripts/model/product');

categories = [
  "ALIMENTO", "HIGIENE", "ACESSORIOS", "BRINQUEDOS"
];

var product1 = new Product(1, "Coleira", "Coleira na cor preta com pinjente de ossinho prata.", 4, 30.99, "Acessorios", "https://www.petelegante.com.br/media/catalog/product/c/o/coleira_preta-pingente_1.jpg");
var product2 = new Product(2,"Ração","Ração Canina, 18k. Para filhotes.",3,100.10, "Alimento", "https://araujo.vteximg.com.br/arquivos/ids/3897061-1000-1000/07896015605193.jpg?v=636796038206100000");
var product3 = new Product(3,"Shampoo para gatos", "Com delicioso cheirinho de amora, o Shampoo Pet Society Beeps Estopinha Gatos Extrato de Aveia vai tornar o banho do seu gatinho prático e rápido.",1,20.00,"Higiene", "https://www.petlove.com.br/images/products/198418/product/Shampoo_Pet_Society_Beeps_Estopinha_Gatos_Extrato_de_Aveia_1932461.jpg?1556467127");
var product4 = new Product(4, "Gaiola", "Gaiola Passarinho com Poleiro Nº04 Sabiá Canario Curió - Gaiolas confiança.", 2, 100.00, "Acessorios", "https://images.tcdn.com.br/img/img_prod/727275/gaiola_trinca_ferro_arco_macho_79_1_20191030112340.jpg")
var product5 = new Product(5, "Bebedouro para gatos", "Fonte para gato. 1l.", 4, 80.00, "Acessorios", "https://http2.mlstatic.com/D_NQ_NP_659667-MLB31210163453_062019-W.jpg")
var product6 = new Product(6, "Ração para peixes", "Ração para peixes de aquario. 20g.", 5, 73.00, "Alimento", "https://a-static.mlcdn.com.br/618x463/racao-para-peixes-de-aquario-alcon-basic-alimento-completo-em-flocos-para-peixes-20g/agropesc/535839/f649b1325a7e4b91e649d699655ea938.jpg")
var product7 = new Product(7, "Ossinho de brinquedo", "Brinquedo de borracha para mastigar.", 5, 14.65, "Brinquedos", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTAcsGXnWUxZ7jIRIxevpzzG2MB1LfeU0IARYWKGpyz-m_-aIe4GHXlANfd9g_APHsVSH_tjnslWgWDJnewmYwtZ_prBx-dp9LPF0ATQ_3Tdxm1kNgPErm8&usqp=CAE")
var product8 = new Product(8, "Shampoo para roedores", "Shampoo para Roedores Aloe 400Cc 452 gr.", 5, 33.00, "Higiene", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRykaGeuKii0zdfqzaB2d_4k8sMd6FQ3nVEByfdlkx-puDX59JJ&usqp=CAU")
var product9 = new Product(9, "Ração para roedores", "Ração para roedores. 2k.", 5, 45.00, "Alimento", "https://cdn.awsli.com.br/600x450/203/203612/produto/7350024/2f2af4a7f3.jpg")
var product10 = new Product(10, "Brinquedo para mastigar", "Brinquedo de borracha para mastigar.", 3, 9.30, "Brinquedos", "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOD-igAsoAAPEjOc0x8-4FOGVIp2Mb_GFwHGz5lSl3JglIZQLBX5DPZSb4vY77FrKwxDa3NNY2Lz39xpFndSMvEBF3oVNIphQ91L8-wmE9msa2iieu14Bgpw&usqp=CAE")

products = [product1,product2, product3, product4, product5, product6, product7, product8, product9, product10];

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



router.put('/:id', function(req, res){
  var id = req.params.id;
  req.body.id = id;
  products[id]=req.body;
  res.json(req.body);
  res.status("200");
});

*/

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
