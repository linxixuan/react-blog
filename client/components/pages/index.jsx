var React = require('react');
var BlogBlock = require('../blog/big-block.jsx');
var Reflux = require('reflux');
var BlogStore = require('../../stores/blogStore');
var BlogAction = require('../../actions/blogAction');
var Index = React.createClass({
    mixins: [Reflux.connect(BlogStore, 'blogList')],

    getInitialState: function () {
        return {
            blogList: []
        };
    },

    componentDidMount: function() {
        BlogAction.getList();
    },

    render: function () {
        if (this.state.blogList.length > 0) {
            return (
                <div className="pg-index container">
                    {this.state.blogList.map(function (data, i) {
                        return <BlogBlock blog={data} key={i} />;
                    })}
                </div>
            );
        } else {
            return (
                <div className="pg-index container">
                </div>
            );
        }
    }
});

module.exports = Index;