const express = require('express');
const router = express.Router();

const PersonController = require('./../controllers/PersonController');
const ProductController = require('./../controllers/ProductController');
const AuthController = require('./../controllers/AuthController');

router.use(AuthController.check_token);

router.get('/people', PersonController.all);
router.get('/products', ProductController.all);

module.exports = router;