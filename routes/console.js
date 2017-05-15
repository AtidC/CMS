var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render(index);
});

router.post('/', function(req, res) {
  res.render(index);
});

router.get('/userdata', function(req, res) {
  res.send('respond with a resource');
});

router.get('/schemerate', function(req, res) {
  res.send('respond with a resource');
});

router.get('/schemerule', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
