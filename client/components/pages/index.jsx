var React = require('react');
var BlogBlock = require('../blog/big-block.jsx');
var Reflux = require('reflux');
var blogStore = require('../../stores/blogStore');

var Index = React.createClass({
    mixins: [Reflux.ListenerMixin],

    getInitialState: function () {
        return {
            blogList: []
        };
    },

    onBlogChange: function (blogs) {
        this.setState({
            blogList: blogs
        });
    },

    componentDidMout: function () {
        this.listenTo(blogStore, this.onBlogChange);
    },

    render: function () {
        return (
            <div className="pg-index container">
                {this.state.blogList.map(function () {
                    return <BlogBlock />;
                })}
            </div>
        );
    }
});

module.exports = Index;