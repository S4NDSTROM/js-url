const express = require('express');
const router = express.Router();
const apiService = require('../urlHandler/newUrl/index')
const { parse } = require('querystring');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post ('/newurl', (req, res, next) => {
  console.log('req.body: ', req.body);
  const newUrl = apiService.urlService(req.body)
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(newUrl));
  //res.send('')
});

module.exports = router;
