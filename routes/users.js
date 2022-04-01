//users.js
var express = require('express');
var router = express.Router();
var app = express();

router.get('/', (req, res, next)=>{
 console.log("placceholder")
 res.render('addJSFiddle', {
  });
});


router.use(function(err, req, res, next){
  console.error(err.stack);
});

module.exports = router;
