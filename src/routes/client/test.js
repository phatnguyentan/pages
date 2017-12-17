let express = require('express');
let router = express.Router();
const cAuthen = require('../../services/c-authenticate');
const models = require('../../models');
const _c = require('../../core');
const htmlencode = require('htmlencode');

router.get('/', (req, res) => {
  res.render('test/resize', { title: 'Resize' })
});




module.exports = router;
