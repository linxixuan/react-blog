/*
 * user dependencies
 */
var koa = require('koa');
var static = require('koa-static');
var router = require('koa-router')();
var mongoose = require('mongoose');

var blogController = require('./controllers/blog.js');

mongoose.connect('mongodb://localhost/zmx');

var app = koa();
// static file
app.use(static('.'));

router.get('/', require('./controllers/index.js'));
router.get('/blogs', require('./controllers/blog.js'));
 
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000) 