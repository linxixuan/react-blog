var Reflux = require('reflux');
var BlogActions = require('../actions/blogAction');
var request = require('superagent');

/**
 * need cache
 */
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

    onGetBlog: function (data) {
        var that = this;
        var blog;

        request.get('/blog/' + data.bname)
        .end(function (err, res) {
            blog = res.body.emitted.fulfill[0][0];
            that.trigger(blog);
        });
    }
});

module.exports = BlogStore;