var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Handlebars with Express 4' });
});
router.get('/:id', function(req, res, next) {
  console.log('req.params: ', req.params.id);
  res.redirect('http://www.hackertyper.com');
});

module.exports = router;
