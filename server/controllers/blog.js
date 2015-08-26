var mongoose = require('mongoose');
var Blog = require('../models/blog');
var Router = require('koa-router');

Blog = mongoose.model('Blog');

var blogControllers = {
    list: function *(next) {
        yield this.body = Blog.find().exec();
    },

    blog: function *(next) {
        var bid = this.params.bid; // router passes
        yield this.body = Blog.find({
            bid: bid
        }).exec();
    }
};

module.exports = blogControllers;
