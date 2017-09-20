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
  // form.uploadDir = "/public/images";
  form.parse(req, function(err, fields, files) {
    console.log(fields, files);
  });
  form.on('fileBegin', function (name, file){
    file.path = _c.config.basedir + '/public/images/' + file.name;
  });
  form.on('file', function (name, file){
    console.log('Uploaded ' + file.name);
  });
});

// router.post('/upload', authen.auth, (req, res) => {
//   console.log(req);
// });

module.exports = router;
