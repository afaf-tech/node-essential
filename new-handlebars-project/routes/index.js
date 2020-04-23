var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// get hbs
router.get('/hbs', (req,res,next)=>{
  res.render('hbs-example',{
    title: "<h1>Example EJS Template</h1>",
    showTitle:true,
    data:['apples','oranges','peers','kiwi']
  });
})

module.exports = router;
