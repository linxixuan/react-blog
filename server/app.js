var koa = require('koa');
var static = require('koa-static');
var fs = require('fs');
var path = require('path');
var app = koa();

// static file
app.use(static('.'));

app.use(function *(){
	var indexPath = path.resolve(__dirname, '../static/html/index.html');
	var content = fs.readFileSync(indexPath).toString();
	this.body = content;
});

app.listen(3000);