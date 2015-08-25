var Reflux = require('reflux');
var request = require('superagent');

var BlogAction = Reflux.createActions({
    "list": {children: ["completed","failed"]}
});

BlogAction.list.listen(function (data) {
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

module.exports = BlogAction;
