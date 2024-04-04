var express = require('express');

var router = express.Router();
let compte = {};

router.get('/', function(req, res, next) {
  if ( req.session.compte == null) {
    console.log(req.session.id);
    res.render('index', {title: '', compte: null});
  } else {
    res.render('index', {title: '', compte: req.session.compte});
  }

});
module.exports = router;