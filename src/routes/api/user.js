let express = require('express');
let router = express.Router();
let authen = require('../../services/authenticate');
const models = require('../../models');
const _c = require('../../core');

/**
@api {get} /api/v1/user/list Request Users information
@apiName GetListUsers
@apiGroup User
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/user/list
*/
router.get('/list', authen.auth, (req, res) => {
  models.user.findAll().then(result => {
    _c.res.send(res, result);
  })
});

/**
@api {get} /api/v1/user/show Request User information
@apiName GetUser
@apiGroup User
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/user/show
*/
router.get('/show', authen.auth, (req, res) => {
  _c.res.send(res, req.currentUser);
});


/**
@api {post} /api/v1/user/login User login
@apiName UserLogin
@apiGroup Guest

@apiParam {String}  username=test Mandatory username.
@apiParam {String}  password=123 Mandatory password.
@apiSampleRequest http://localhost:8000/api/v1/user/login
*/
router.post('/login', (req, res) => {
  models.user.login({username: req.body.username, password: req.body.password}, user => {
    if(user) {
      _c.auth.generateToken(user.username, user.password, token => {
        models.session.findOrCreate({ where: {token: token, userId: user.id }, include: [{model: models.user}]}).spread((result, created) => {
          _c.res.send(res, result);
        });
      })
    } else {
      _c.res.sendFail(res, "Username or Password is not correct");
    }
  });
});

/**
@api {post} /api/v1/user/signup Create User
@apiName UserSignUp
@apiGroup Guest

@apiParam {String}  username=tom Mandatory username.
@apiParam {String}  password=123 Mandatory password.
@apiSampleRequest http://localhost:8000/api/v1/user/signup
*/
router.post('/signup', (req, res) => {
  models.user.findOne({ where: {username: req.body.username}}).then(user => {
    if(user) {
      _c.res.sendFail(res, "Username is registerd");
    } else {
      models.user.createNew({username: req.body.username, password: req.body.password}).then((user) => {
        _c.auth.generateToken(user.username, user.password, token => {
          models.session.findOrCreate({ where: {token: token, userId: user.id }}).spread((session, created) => {
            _c.res.send(res, session);
          });
        })
      });
    }
  });
});

/**
@api {post} /api/v1/user/logout Request User logout
@apiName User Logout
@apiGroup User
@apiHeader {String} Authorization ="Basic dGVzdDokMmEkMDQkMWN1UTZnVklLY3o3cmNPbkUuVzc5ZWJxaTRvRkpDUm95L0k2RUl1aXpHYkg3a1R3UzFZdlM=" Basic Access Authentication token.
@apiSampleRequest http://localhost:8000/api/v1/user/logout
*/
router.post('/logout', (req, res) => {
  let token = _c.auth.getToken(req.headers.authorization, token => {
    if (!token) {
      _c.res.sendFail(res, 'Please put Authorization');
    } else {
      models.session.destroy({ where: {token: token}}).then((result) => {
        _c.res.sendSuccess(res);
      });
    }
  });
});

module.exports = router;
