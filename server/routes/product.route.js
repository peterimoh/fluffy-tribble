const express = require('express')
const Product = require('../controllers/product.controller')
const upload = require('../helper/upload.middleware')

const router = express.Router()

router.post('/add-product', upload.single('thumb'), Product.CreateProduct)
router.get('/get-product', Product.ListProduct)

module.exports = router