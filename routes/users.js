var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('users', {comptes: req.session.accounts, compte: null});
});

router.get('/supprimer', function(req, res, next) {
  if (req.session.accounts.length > 0) {
    let login = req.query.accountLogin;
    for (let i = 0; i < req.session.accounts.length; i++) {
      if (req.session.accounts[i].login === login) {
        req.session.accounts.splice(i, 1);
        return res.redirect('/users');
      }
    }
  } else {
    return res.redirect('/users');
  }
});

router.get('/modification', function(req, res, next) {
  res.render('modifs', {compte: req.session.compte});
});

router.post('/modifier', function(req, res, next) {
  let loginTemp = req.session.compte.login;
  req.session.compte.nom = req.body.nom;
  req.session.compte.prenom = req.body.prenom;
  req.session.compte.login = req.body.login;
  if (req.body.password !== "") {
    req.session.compte.password = req.body.password;
  }

  for (let i = 0; i < req.session.accounts.length; i++) {
    if (loginTemp === req.session.accounts[i].login) {
      req.session.accounts[i].nom = req.body.nom;
      req.session.accounts[i].prenom = req.body.prenom;
      req.session.accounts[i].login = req.body.login;
      if (req.body.password !== "") {
        req.session.accounts[i].password = req.body.password;
      }
      return res.redirect('/');
    }
  }
});

module.exports = router;