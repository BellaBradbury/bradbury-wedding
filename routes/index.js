var express = require('express');
var router = express.Router();
// sequelize
var pug = require('pug');

// async handler
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(err){
      res.status(500).send(err);
    }
  }
}

// GET home page
router.get('/', asyncHandler( async(req, res) => {
  res.redirect('/home');
}));
router.get( '/home', asyncHandler (async(req, res) => {
  res.render('index');
}));

// GET story page
router.get( '/story', asyncHandler (async(req, res) => {
  res.render('story');
}));

// GET news page
router.get( '/news', asyncHandler (async(req, res) => {
  res.render('news');
}));

// GET gallery page
router.get( '/gallery', asyncHandler (async(req, res) => {
  res.render('gallery');
}));

module.exports = router;
