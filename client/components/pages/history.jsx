var React = require('react');
var Reflux = require('reflux');

var BlogStore = require('../../stores/blogStore');
var BlogAction = require('../../actions/blogAction');
var historyBlog = require('../blog/history-block.jsx');

var MonthBlock = React.createClass({
    mixins: [Reflux.connect(BlogStore, 'blogList')],

    getInitialState: function() {
        return {
            time: '2015-06',
            blogList:[]
        };
    },

    componentDidMount: function() {
        BlogAction.getList();
    },

    render: function() {
        return (
            <div className="month">
                <div className="month__header">
                    {this.state.time}
                </div>
                <div className="month__bloglist">
                    {
                        this.state.blogList.map(function(t, i) {
                            <historyBlog key={i} blog={t} />
                        })
                    }
                </div>
            </div>
        );
    }
});

var History = React.createClass({

    getInitialState: function () {
        return {};
    },

    render: function () {
        return (
            <div>
                <MonthBlock />
            </div>
        );
    }
});

module.exports = History;
