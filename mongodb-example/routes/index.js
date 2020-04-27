var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const passport = require('passport');

/* Login */

router.get('/login', (req,res,next)=>{
  const errors = req.flash().error || [];
  res.render('login', {errors})
});


router.post('/login', passport.authenticate('local',{
  failureFlash: true,
  failureRedirect:'/login',
}), (req,res,next)=>{
  res.redirect('/secret');
});

const ensureAuthenticated = (req,res, next)=>{
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/login');
}

router.get('/secret', ensureAuthenticated,(req,res,next)=>{
  res.send('Secret area');
})

/* GET home page. */
router.get('/', function(req, res, next) {
  const collection  = req.app.locals.collection;

  collection.find({})
    .toArray()
    .then(data => res.json(data));
});


router.post('/', (req,res,next)=>{
  const collection = req.app.locals.collection;
  const document = req.body;

  collection
    .insert(document)
    .then(data=> res.json(data)); //data is a response from mongo
})

router.get('/:id', (req,res,next)=> {
  const collection = req.app.locals.collection;
  const id = ObjectID(req.params.id);
  console.log(id);
  

  collection.findOne({ _id :id})
      .then( data => res.json(data));
})


router.patch('/:id/name', (req,res,next)=> {
  const collection = req.app.locals.collection;
  const id = ObjectID(req.params.id);
  const newName = req.body.newname;


  collection.updateOne({ _id :id}, {$set: {name:newName}})
      .then( data => res.json(data));
})


router.put('/:id', (req,res,next)=>{
  const collection = req.app.locals.collection;
  const id = ObjectID(req.params.id);
  const newDocument = req.body;

  collection
    .replaceOne({ _id: id}, newDocument)
    .then(data => res.json(data));
})


router.delete('/:id',(req,res, next)=>{
  const collection = req.app.locals.collection;
  const id = ObjectID(req.params.id);

  collection
    .deleteOne({_id:id})
    .then(data=> res.json(data));
} )

module.exports = router;
