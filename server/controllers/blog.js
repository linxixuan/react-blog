var mongoose = require('mongoose');
var Blog = require('../models/blog');

Blog = mongoose.model('Blog');

var blogController = function *(next) {
     yield this.body = Blog.find().exec();
};

module.exports = blogController;
