var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/assetlist', function(req, res, next) {
  res.render('assetlist', { title: 'assetlist' });
});





module.exports = router;