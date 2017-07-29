


exports.sendError = function (err, req, res, next) {
  // debug(err.stack)
  // res.status(500).send('Something broke!')
  res.status(500).json({error: err});
}
