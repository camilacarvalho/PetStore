    let shopping_cart = require('../public/json/basket.json');

    exports.all_items = function(req, res, next) {
        res.json(shopping_cart)
        res.status("204");
    };

    exports.delete_all_items = function(req, res, next){
        shopping_cart.splice(0,shopping_cart.length);
        res.json(shopping_cart);
        res.status("204");
    };

    exports.delete_item = function (req, res, next) {
        let id = req.params.id;
        remove_basket(id);
        res.json(shopping_cart);
        res.status("204");
      }

    exports.create_item = function (req, res, next) {
        if (!contains(req.body.id)) {
          shopping_cart.push(req.body);
        }
        res.json(req.body);
        res.status("201");
        return;
      }

      function contains(id) {
        return shopping_cart.some(basket => basket.id == id);
      }

      function remove_basket(id) {
        let product;
        for (let i = 0; i < shopping_cart.length; i++) {
          if (shopping_cart[i].id == id) {
            product = shopping_cart.splice(i, 1);
          }
        }
        return product;
      }

      exports.update_item = function(req, res, next){
        const id = req.params.id;
        console.log(req.body);
        console.log(shopping_cart);
        for (let i = 0; i < shopping_cart.length; i++) {
          if (shopping_cart[i].id == id) {
            shopping_cart[i]=req.body;
          }
        }
        console.log(shopping_cart);
        res.json(req.body);
        res.status("200");
      }