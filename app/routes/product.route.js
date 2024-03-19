var express = require('express');
var router = express.Router();

const Product = require("../controllers/product.controller");
const porduct = new Product;


router.get('/getproduct',porduct.getproduct)
router.post('/orderplace',porduct.orderProduct)

module.exports = router;