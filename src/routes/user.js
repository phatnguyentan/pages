let express = require('express');
let router = express.Router();
let userCtr = require('../controllers/user');
let authenCtr = require('../controllers/authenticate');

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

router.get('/list', authenCtr.auth, userCtr.index);
router.post('/login', userCtr.login);
router.post('/signup', userCtr.signup);
router.post('/logout', userCtr.logout);

module.exports = router;
