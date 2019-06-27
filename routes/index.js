const express = require('express');
const router = express.Router();
const getUrl = require('../urlHandler/getUrl/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Handlebars with Express 4' });
});
router.get('/:id', function(req, res, next) {
  console.log('req.params: ', req.params.id);
  
let redirectUrl = getUrl.getUrl()
console.log(redirectUrl);
  
  res.redirect(redirectUrl);
});

module.exports = router;
