var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CPS 530 Node.js' });
});

/* GET users listing. */
router.get('/page1', function(req, res, next) {
    res.render('page1', { title: 'Page 1' });
});

router.get('/page2', function(req, res, next) {
    res.render('page2', { title: 'Page 2' });
});

router.get('/page3', function(req, res, next) {
    res.render('page3', { title: 'Page 3' });
});

router.get('/page4', function(req, res, next) {
    res.render('page4', { title: 'Page 4' });
});

router.get('/page5', function(req, res, next) {
    res.render('page5', { title: 'Page 5' });
});

router.get('/page6', function(req, res, next) {
    res.render('page6', { title: 'Page 6' });
});

module.exports = router;
