const express = require('express');
const router = express.Router();
const getUrl = require('../urlHandler/getUrl/index')
const apiService = require('../urlHandler/newUrl/index')


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Short URLs' });
});
router.get('/:id', async function (req, res, next) {
  console.log('inside slash:id')
  let link = await getUrl.getUrl(req.params.id)
  res.redirect(link);
});
router.post ('/newurl', (req, res, next) => {
  const newUrl = apiService.validator(req.body.userInput)
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(newUrl));
});

module.exports = router;
