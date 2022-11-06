const express = require('express');
const router = express.Router();
const context = require('../controllers/figures')
router.get('/',context.index);
router.get('/items',context.itemFigure);
// Get particular item
router.get('/:id',context.figure_detail);
module.exports = router;