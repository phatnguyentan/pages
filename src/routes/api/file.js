let express = require('express');
let router = express.Router();
let authen = require('../../services/authenticate');
const models = require('../../models');
const _c = require('../../core');
const formidable = require('formidable');
const fs = require('fs');
const gm = require('gm');

/**
@api {post} /api/v1/file/upload Upload File
@apiName Upload
@apiGroup File
*/
router.post('/upload', authen.auth, (req, res) => {
  let form = new formidable.IncomingForm();
  let path = `public/images/posts/${req.currentUser.id}/`
  let path2 = `/images/posts/${req.currentUser.id}/`
  form.parse(req, (err, fields, files) => {
    _c.debug(err);
  });
  form.on('fileBegin', (name, file) => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    file.path = _c.config.basedir + path + file.name;
  });
  form.on('file', (name, file) => {
    // gm(_c.config.basedir + path + file.name)
    // .resize(40, 40, "!");
    res.json({link: path2 + file.name});
  });
});

// router.post('/upload', authen.auth, (req, res) => {
//   console.log(req);
// });

module.exports = router;
