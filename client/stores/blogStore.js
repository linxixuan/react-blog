var Reflux = require('reflux');
var BlogAction = require('../actions/blogAction');

var BlogStore = Reflux.createStore({
    listenables: BlogAction,

    onListCompleted: function (payload) {
        this.trigger(payload);
    },

    onListFailed: function (payload) {
        this.trigger(payload);
    },
});