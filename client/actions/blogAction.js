var Reflux = require('reflux');

var BlogActions = Reflux.createActions([
    "getList",
    "getBlog",
    "getMonthsBlogs"
]);

module.exports = BlogActions;
