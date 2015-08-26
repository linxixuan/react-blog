var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var Link = Router.Link;

var moment = require('moment');
var marked = require('marked');
var hljs = require('highlight.js');

var BlogStore = require('../../stores/blogStore');
var BlogAction = require('../../actions/blogAction');

var highlight = function(code, lang){
    var o;

    if(lang == 'js') {
        lang = 'javascript';
    } else if (lang == 'html') {
        lang = 'xml';
    }
    if(lang){
        o = hljs.highlight(lang, code);
    } else {
        o = hljs.highlightAuto(code).value;
    }

    if(o){
        if (o.value) {
            return o.value;
        } else {
            return o;
        }
    } else {
        return code;
    }
};

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    highlight: highlight
});;

/*
 * 获取querystring请求内容
 */
var BlogPage = React.createClass({
    mixins: [Reflux.connect(BlogStore, 'blog'), Router.State], // doc:https://github.com/rackt/react-router/blob/0.13.x/doc/06%20Mixins/State.md

    getInitialState: function () {
        // 伪造数据
        return {
            blog: {
                title: '',
                content: '',
                tags: [],
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
                        __html: marked(blog.content, {sanitize: true})
                    }}>
                </div>
                <div className="blog__info">
                    <Link to="history" className="time" query={{date: date}}>{date}</Link>
                    <ul className="tag-list clearfix">
                    {
                        blog.tags.map(function (item) {
                            return (
                            <li>
                                <Link className="tag" to="history" query={{tag: item}}>{item}</Link>
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
