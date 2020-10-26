const express = require('express');
const router = express.Router();

const products_controller = require('../controllers/products')

/* GET categories list. */
router.get('/categories', products_controller.get_categories);

router.get('/', products_controller.all_items);

router.get('/:id', products_controller.get_item);

module.exports = router;
