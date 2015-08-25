var React = require('react');
var moment = require('moment');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    getInitialState: function () {
        var blog = this.props.blog;
        // 伪造数据
        return {
            title: blog.title,
            link: blog.bid,
            summary: blog.summary,
            tags: blog.tags || [],
            date: blog.date
        };
    },

    render: function () {
        var date = moment(this.state.date).format('MMM D YYYY');

        return (
            <div className="blog-block">
                <h5 className="blog-block__title">
                    <Link to="blog" query={{bname: this.state.link}}>{this.state.title}</Link>
                </h5>
                <div className="blog-block__content">
                    <Link to="blog" query={{bname: this.state.link}}>{this.state.summary}</Link>
                </div>
                <div className="blog-block__extra">
                    {
                        this.state.tags.map(function (item, index) {
                            return <Link to="history" key={index} className="tags" query={{tag: item}}>{item}</Link>;
                        })
                    }
                </div>
                <Link to="history" query={{date: this.state.date}} className="blog-block__date">{date}</Link>
            </div>
        );
    }
});