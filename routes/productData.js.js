const express = require('express');
const router = express.Router();
const { getProduct, getProductById } = require('../controller/herbData.controller');
const { getArticle, getArticleById } = require('../controller/articleData.controller');

//Products
router.get('/products', getProduct);
router.get('/products/:id', getProductById);

//Articles
router.get('/articles', getArticle);
router.get('/articles/:id', getArticleById);

module.exports = router