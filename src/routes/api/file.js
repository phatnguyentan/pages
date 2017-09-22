let express = require('express');
let router = express.Router();
let authen = require('../../services/authenticate');
const models = require('../../models');
const _c = require('../../core');
const formidable = require('formidable');

/**
@api {post} /api/v1/file/upload Upload File
@apiName Upload
@apiGroup File
*/
router.post('/upload', (req, res) => {
  let form = new formidable.IncomingForm();
  form.parse(req, (err, fields, files) => {
    _c.debug(err);
  });
  form.on('fileBegin', (name, file) => {
    file.path = _c.config.basedir + 'public/images/' + file.name;
  });
  form.on('file', (name, file) => {
    res.json({link: '/images/' + file.name});
  });
});

// router.post('/upload', authen.auth, (req, res) => {
//   console.log(req);
// });

module.exports = router;
