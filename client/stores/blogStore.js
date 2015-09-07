var Reflux = require('reflux');
var BlogActions = require('../actions/blogAction');
var request = require('superagent');

/**
 * need cache
 */
var BlogStore = Reflux.createStore({
    listenables: [BlogActions],

    // all blog list
    onGetList: function () {
        var that = this;
        var blogList;

        request.get('/blogs')
        .end(function (err, res) {
            blogList = res.body.emitted.fulfill[0];
            that.trigger(blogList);
        });
    },

    // single blog
    onGetBlog: function (data) {
        var that = this;
        var blog;

        request.get('/blog/' + data.bname)
        .end(function (err, res) {
            blog = res.body.emitted.fulfill[0][0];
            that.trigger(blog);
        });
    }, 

    // bloglist group by month
    onGetMonthsBlogs: function (data) {
        var that = this;
        var months;

        // a new api for temporarily use
        request.get('/months')
        .end(function (err, res) {
            months = res.body;

            that.trigger(months);
        });
    }
});

module.exports = BlogStore;