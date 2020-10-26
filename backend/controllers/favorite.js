let favorites = require('../public/json/favorites.json');

exports.all_items =function (req, res, next) {
    res.json(favorites);
}

exports.create_items = function (req, res, next) {
    if (!contains(req.body.id)) {
      favorites.push(req.body);
    }
    res.json(req.body);
    res.status("201");
}

exports.delete_item = function (req, res, next) {
    const id = req.params.id;
    remove_favorite(id);
    res.json(favorites);
    res.status("204");
}

exports.contains_item = function(req, res, next){
    let id = req.params.id;
    res.json(contains(id));
}

function contains(id) {
    return favorites.some(favorite => favorite.id == id);
}
  
function remove_favorite(id) {
    let product;
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id == id) {
        product = favorites.splice(i, 1);
      }
    }
    return product;
};