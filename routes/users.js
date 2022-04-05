//users.js
var express = require('express');
var router = express.Router();
var app = express();

router.get('/', (req, res, next)=>{
 console.log("placceholder")
 res.render('addJSFiddle', {
  });
});

router.get('/cards', (req, res, next)=>{
  console.log("placceholder")
  res.render('cardTailWind', {
   });
 });


router.use(function(err, req, res, next){
  console.error(err.stack);
});

module.exports = router;
