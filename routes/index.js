const express = require('express');
const router = express.Router();
const getUrl = require('../urlHandler/getUrl/index')


router.get('/', function (req, res, next) {
  res.render('index', { title: 'Handlebars with Express 4' });
});
router.get('/:id', async function (req, res, next) {
  let link = await getUrl.getUrl(req.params.id)
  res.redirect(link);
});

module.exports = router;
