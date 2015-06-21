var koa = require('koa');
var fs = require('fs');
var app = koa();

app.use(function *(){
	var content = fs.readFileSync('./index.html');
	this.body = content;
});

app.listen(3000);