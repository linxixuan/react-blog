var Reflux = require('reflux');
var blogAction = require('../actions/blogAction');

var blogStore = Reflux.createStore({
    init: function () {
        this.listenTo(blogAction, this.ouput);
    },

    output: function (blogs) {
        console.log('get list');

        this.trigger(blogs);
    }

});