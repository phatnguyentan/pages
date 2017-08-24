module.exports = {
  paginate: function(req, query = null) {
    if (req.query.page && req.query.per) {
      req.pagination = {}
      req.pagination.page = req.query.page
      req.pagination.per = req.query.per
      if(query) {
        query.offset = (req.query.page - 1) * req.query.per
        query.limit = req.query.per
        return query
      } else {
        return { offset: (req.query.page - 1) * req.query.per, limit: req.query.per }
      }

    } else {
      return {}
    }
  }
}
