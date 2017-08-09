let express = require('express');
let router = express.Router();
let productCtr = require('../controllers/product');
let authenCtr = require('../controllers/authenticate');


router.get('/list', authenCtr.auth, productCtr.list);


module.exports = router;
