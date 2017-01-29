'use strict'
module.exports = (err, req, res, next) => {
  let status = err.status || 400
  res.status(status)
  res.json({success: false, message: err.message})
}
