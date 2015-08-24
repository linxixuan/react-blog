var Reflux = require('reflux');
var blogAction = require('../actions/blogAction');

// 发异步请求
blogAction();

var blogStore = Reflux.createStore({
    init: function () {
        this.listenTo(blogAction, this.ouput);
    },

    output: function (blogs) {
        this.trigger(blogs);
    }

});