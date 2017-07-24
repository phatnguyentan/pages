let express = require('express');
let router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
})
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({users: [{name: 'Timmy Change 2'}]});
});

module.exports = router;
