var mongoose = require('mongoose');
var Blog = require('../models/blog');
var Router = require('koa-router');
var moment = require('moment');

Blog = mongoose.model('Blog');

var blogControllers = {
    list: function *(next) {
        yield this.body = Blog.find().sort({date:'desc'}).exec();
    },

    blog: function *(next) {
        var bid = this.params.bid; // router passes
        yield this.body = Blog.find({
            bid: bid
        }).exec();
    },

    months: function *(next) {
        var months;
        var res = [];
        var tmp;
        var beginDate;
        var endDate;

        months = getRecentMonths();

        for(var i = 0, len = months.length; i < len; i++) {
            month = months[i];

            beginDate = new Date(month);

            endDate = new Date(month);
            endDate.setMonth(endDate.getMonth() + 1);

            res.push({
                name: month,
                blogs: Blog
                    .find({
                        date: {$lt: endDate, $gte: beginDate}
                    })
                    .sort({
                        date: 'desc'
                    })
                    .exec()
            });
        }

        yield this.body = res;

        function getRecentMonths () {
            var monthArr = [];

            var start = '2014-01';
            var end = +(new Date(moment(new Date()).format('YYYY-MM')));
            var flag = +(new Date(start));
            var tmp;

            while(flag < end) {
                tmp = moment(new Date(flag)).format('YYYY-MM');
                monthArr.push(tmp);

                tmp = new Date(tmp);
                tmp = tmp.setMonth(tmp.getMonth() + 1);
                flag = +tmp;
            }


            return monthArr.reverse();
        }
    }
};

module.exports = blogControllers;
