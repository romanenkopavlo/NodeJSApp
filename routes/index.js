var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  if (req.session.compte == null) {
    console.log(req.session.id);
    res.render('index', {title: '', compte: null});
  } else {
    res.render('index', {title: '', compte: req.session.compte});
  }
});

router.get('/inscription', function (req, res, next) {
  res.render('inscription', {title: "inscription ",compte : null});
});

router.post('/connexion', function (req, res, next) {
  req.session.compte = {
    'nom': req.body.nom,
    'prenom': req.body.prenom,
    'login': req.body.login,
    'password': req.body.password,
  };
  res.render('suite', {title: "Connexion", compte: req.session.compte})
});
module.exports = router;