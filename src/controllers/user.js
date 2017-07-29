const User = require('../models').User;

/**
 * GET /login
 * Login page.
 */
exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('account/login', {
    title: 'Login'
  });
};


exports.index = (req, res) => {
  User.findAll().then(result => {
    res.json({data: result});
  })
};

// .catch(error => res.status(400).json({error: error}));
