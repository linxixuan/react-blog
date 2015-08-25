var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
    getInitialState: function () {
        var blog = this.props.blog;
        // 伪造数据
        return {
            title: blog.title,
            link: '/blog',
            summary: blog.summary,
            tags: blog.tags || [],
            date: blog.date
        };
    },

    render: function () {
        var date = moment(this.state.date).format('MMM D YYYY');

        return (
            <div className="blog-block">
                <h5 className="blog-block__title"><a href={'"' + this.state.href +'"'} target="_blank">{this.state.title}</a></h5>
                <div className="blog-block__content">
                    <a href={'"' + this.state.href + '"'} target="_blank">{this.state.summary}</a>
                </div>
                <div className="blog-block__extra">
                    {
                        this.state.tags.map(function (item) {
                            return <a className="tags" href={'"http://baidu.com?tags=' + {item} + '"'} target="_blank">{item}</a>;
                        })
                    }
                </div>
                <a className="blog-block__date">{date}</a>
            </div>
        );
    }
});