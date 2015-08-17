var Reflux = require('reflux');
var request = require('superagent');

var blogAction = Reflux.createActions({
    "load": {children: ["completed","failed"]}
});

blogAction.load.listen(function () {
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

module.exports = blogAction;
