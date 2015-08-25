var Reflux = require('reflux');
var BlogActions = require('../actions/blogAction');
var request = require('superagent');

var BlogStore = Reflux.createStore({
    listenables: [BlogActions],
    onGetList: function () {
        var that = this;
        var blogList;

        request.get('/blogs')
        .end(function (err, res) {
            blogList = res.body.emitted.fulfill[0];
            that.trigger(blogList);
        });
    },
});

module.exports = BlogStore;