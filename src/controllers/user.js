const user = require('../models').user;

const _c = require('../core/index');
/**
@api {post} api/v1/user/login Request User login
@apiName UserLogin
@apiGroup User

@apiParam {String} [username]  Mandatory username.
@apiParam {String} [password]  Mandatory password.
@apiSampleRequest http://localhost:8000/api/v1/user/login

@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
       status: 'success'
    }
*/
exports.login = (req, res) => {
  user.findOne({ where: {username: 'david', password: '123'} }).then(user => {
      _c.res.send(res, user);
  });
};

/**
@api {get} api/v1/user/list Request Users information
@apiName GetListUsers
@apiGroup User

@apiSampleRequest http://localhost:8000/api/v1/user/list

@apiSuccessExample Success-Response:
    HTTP/1.1 200 OK
    {
      status: 'success',
      data: [
           "fullName": "David Nguyen",
           ...
       ]
    }
*/
exports.index = (req, res) => {
  user.findAll().then(result => {
    res.json({data: result});
  })
};
