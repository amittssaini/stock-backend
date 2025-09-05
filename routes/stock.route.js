const router = require('express').Router();
const {getStock,getSingleStock}=require('../controllers/stock.controller')

router.get("/all",getSingleStock);
router.get('/single',getStock);


module.exports = router;