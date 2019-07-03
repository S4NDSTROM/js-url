const express = require('express');
const router = express.Router();
const apiService = require('../urlHandler/newUrl/index')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post ('/newurl', (req, res, next) => {
  const newUrl = apiService.validator(req.body.userInput)
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(newUrl));
  //res.send('')
});

module.exports = router;
