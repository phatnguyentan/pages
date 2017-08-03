let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({author: {name: 'David'}});
});

module.exports = router;
