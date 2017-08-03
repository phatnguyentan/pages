const User = require('../models').User;

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
  console.log(req.params, req.query, req.body);
  res.json({data: 'ok'});
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
           "fullName": "David Nguyen"
       ]
    }
*/
exports.index = (req, res) => {
  User.findAll().then(result => {
    res.json({data: result});
  })
};
