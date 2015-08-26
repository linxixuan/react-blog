var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var moment = require('moment');

var BlogStore = require('../../stores/blogStore');
var BlogAction = require('../../actions/blogAction');

var moment = require('moment');

/*
 * 获取querystring请求内容
 */
var BlogPage = React.createClass({
    mixins: [Reflux.connect(BlogStore, 'blog'), Router.State], // doc:https://github.com/rackt/react-router/blob/0.13.x/doc/06%20Mixins/State.md

    getInitialState: function () {
        // 伪造数据
        return {
            blog: {
                title: '博客名',
                content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
                tags: ['测试', '测试试试', 'sss'],
                date: new Date(),
            }
        };
    },

    componentDidMount: function() {
        BlogAction.getBlog(this.getQuery());
    },

    render: function () {
        var blog = this.state.blog;
        var date = moment(blog.date).format('MMM D YYYY');

        return (
            <div className="container pg-blog blog">
                <h1 className="blog__title">
                    {blog.title}
                </h1>
                <div className="blog__content"
                    dangerouslySetInnerHTML={{
                        __html: blog.content
                    }}>
                </div>
                <div className="blog__info">
                    <a className="time" href="">{date}</a>
                    <ul className="tag-list clearfix">
                    {
                        blog.tags.map(function (item) {
                            return (
                            <li>
                                <a className="tag" href={'"http://baidu.com?tags=' + {item} + '"'} target="_blank">{item}</a>
                            </li>
                            );
                        })
                    }
                    </ul>
                </div>
            </div>
        );

    }
});

module.exports = BlogPage;
