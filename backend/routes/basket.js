
const express = require('express');
const router = express.Router();

const basket_controller = require('../controllers/basket')


/* GET shopping cart list. */
router.get('/', basket_controller.all_items);
/* POST shopping cart. */
router.post('/', basket_controller.create_item);
/* PUT shopping cart. */
router.put('/:id', basket_controller.update_item);
/* DELETE shopping cart. */
router.delete('/:id', basket_controller.delete_item)
router.delete('/', basket_controller.delete_all_items)

module.exports = router;
