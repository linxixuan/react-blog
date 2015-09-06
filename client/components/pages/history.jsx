var React = require('react');
var Reflux = require('reflux');

var BlogStore = require('../../stores/blogStore');
var BlogAction = require('../../actions/blogAction');
var HistoryBlog = require('../blog/history-block.jsx');

var MonthBlock = React.createClass({
    mixins: [Reflux.connect(BlogStore, 'monthList')],

    getInitialState: function() {
        return {
            monthList: []
        };
    },

    componentDidMount: function() {
        BlogAction.getMonthsBlogs();
    },

    render: function() {
        var blogList;
        if (this.state.monthList.length > 0) {
            return (
            <div className="wrapper">
                {
                    this.state.monthList.map(function (month, index) {
                        blogList = month.blogs.emitted.fulfill[0];

                        if (blogList.length > 0) {
                            return (
                                <div className="month" key={index}>
                                    <div className="month__header">
                                        {month.name}
                                    </div>
                                    <div className="month__bloglist">
                                        {
                                            blogList.map(function(t, i) {
                                                return <HistoryBlog key={i} blog={t} />;
                                            })
                                        }
                                    </div>
                                </div>
                            );
                        }
                    })
                }
            </div>
            );
        } else {
            return (<div className="wrapper"></div>);
        }
    }
});

var History = React.createClass({

    getInitialState: function () {
        return {};
    },

    render: function () {
        // foreach months
        return (
            <div className="container pg-history">
                <MonthBlock />
            </div>
        );
    }
});

module.exports = History;
