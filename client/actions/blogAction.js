var Reflux = require('reflux');
var request = require('superagent');

var Actions = Reflux.createActions({
    "blog": {children: ["completed","failed"]}
});

Actions.blog.listen(function () {
    var that = this;
    request
    .get('/blogs')
    .end(function (err, res) {
        if(err) {
            console.log(err);
            that.faild(err);
        }

        if (res) {
            that.completed(res);
        }
    });
});

module.exports = Actions.blog;
