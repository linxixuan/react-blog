/*
 * user dependencies
 */
var koa = require('koa');
var static = require('koa-static');
var mongoose = require('mongoose');

var blogController = require('./controllers/blog.js');

mongoose.connect('mongodb://localhost/zmx');

var app = koa();
app.use(static('.'));

var router = require('./router.js');

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3103) 