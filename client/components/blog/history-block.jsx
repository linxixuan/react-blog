var React = require('react');
var moment = require('moment');
var Router = require('react-router');
var Link = Router.Link;

module.exports = React.createClass({
    getInitialState: function () {
        var blog = this.props.blog;

        return {
            title: blog.title,
            link: blog.bid,
            tags: blog.tags,
            date: blog.date
        };
    },

    render: function () {
        var date = moment(this.state.date).format('YYYY-MM-D');
        return (
            <div className="blog-block cf">
                <h5 className="blog-block__title">
                    <Link to="blog" query={{bname: this.state.link}}>{this.state.title}</Link>
                </h5>
                <Link to="history" query={{date: date}} className="blog-block__date">{date}</Link>
                <div className="blog-block__tags cf">
                    {
                        this.state.tags.map(function (item, index) {
                            return <Link to="history" key={index} className="tag" query={{tag: item}}>{item}</Link>;
                        })
                    }
                </div>
            </div>
        );
    }
});
