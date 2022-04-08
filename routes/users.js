//users.js
var express = require('express');
var router = express.Router();
var app = express();

router.get('/', (req, res, next)=>{
 console.log("placceholder")
 res.render('cardTailWind', {
  });
});

router.get('/cards', (req, res, next)=>{
  console.log("placceholder")
  res.render('cardTailWind', {
   });
 });

 router.get('/about', (req, res, next)=>{
  console.log("placceholder")
  res.render('about', {
   });
 });

 router.get('/more', (req, res, next)=>{
  console.log("placceholder")
  res.render('more', {
   });
 });


router.use(function(err, req, res, next){
  console.error(err.stack);
});

module.exports = router;
