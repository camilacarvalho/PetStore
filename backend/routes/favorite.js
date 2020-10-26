const express = require('express');
const router = express.Router();

const favorites_controller = require('../controllers/favorite')

/* GET favorites list. */
router.get('/', favorites_controller.all_items);

/* POST favorite. */
router.post('/', favorites_controller.create_items);

/* DELETE favorite. */
router.delete('/:id', favorites_controller.delete_item);

router.get('/contains/:id', favorites_controller.contains_item);

module.exports = router;
