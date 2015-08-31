var React = require('react');

var historyBlog = require('../blog/history-block.jsx');

var MonthBlock = React.createClass({
    getInitialState: function() {
        return {
            time: '2015-06'
        };
    },

    render: function() {
        return (
            <div class="month">
                <div class="month__header">
                    {this.state.time}
                </div>
                <div class="month__bloglist">
                    {
                        this.state.bloglist.map(function(t, i) {
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
            <div></div>
        );
    }
});

module.exports = History;
