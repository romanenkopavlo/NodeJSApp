var express = require('express');
var router = express.Router();
let isError;
router.get('/', function(req, res, next) {
  if (req.session.compte == null) {
    console.log(req.session.id);
    res.render('index', {title: '', compte: null});
  } else {
    res.render('index', {title: '', compte: req.session.compte});
  }
});

router.get('/inscription', function (req, res, next) {
  res.render('inscription', {title: "Inscription ", compte : null});
});

router.post('/connexion', function (req, res, next) {
  req.session.compte = {
    'nom': req.body.nom,
    'prenom': req.body.prenom,
    'login': req.body.login,
    'password': req.body.password,
  };
  req.session.accounts.push(req.session.compte);
  res.render('suite', {title: "Connexion", compte: req.session.compte});
});

router.get('/login', function (req, res, next) {
  isError = false;
  console.log(req.session.accounts[0]);
  res.render('login', {compte: null, isError: isError});
});

router.get('/deconnecter', function (req,res, next) {
  req.session.compte = null;
  res.redirect('/');
});

router.post('/connexionLogin', function (req, res, next) {
  if (req.session.accounts.length > 0) {
    for (let i = 0; i < req.session.accounts.length; i++) {
      if (req.body.login !== req.session.accounts[i].login || req.body.password !== req.session.accounts[i].password) {
        isError = true;
      } else {
        isError = false;
        req.session.compte = req.session.accounts[i];
        return res.redirect('/');
      }
    }
  } else {
    isError = true;
  }

  if (isError) {
    return res.render('login', {compte: null, isError: isError});
  }
});

module.exports = router;