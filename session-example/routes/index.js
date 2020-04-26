var express = require('express');
var router = express.Router();
// var viewCount = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  // viewCount += 1;
  // to avoid NaN value
  if(!req.session.viewCount){
    req.session.viewCount = 1;
  }else{
    req.session.viewCount += 1;
  }
  res.render('index', { title: 'Express' , viewCount: req.session.viewCount});
});

module.exports = router;
