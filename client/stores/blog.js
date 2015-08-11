var Reflux = require('reflux');
var blogAction = require('../controllers/blog.js');

var blogStore = Reflux.createStore({
    // Initial setup
    init: function() {
        this.listenTo(blogAction, this.output);
    },
    // Callback
    output: function(flag) {
        console.log(flag);
    }
});