var React = require('react');
var moment = require('moment');

/*
 * 获取querystring请求内容
 */
var BlogPage = React.createClass({
	getInitialState: function () {
		// 伪造数据
		return {
			title: '博客名',
			content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
			tags: ['测试', '测试试试', 'sss'],
			date: new Date(),
		};
    },

    render: function () {
        return (
            <div className="container pg-blog blog">
                <h1 className="blog__title">
                    {this.state.title}
                </h1>
                <div className="blog__content"
                    dangerouslySetInnerHTML={{
                        __html: this.state.content
                    }}>
                </div>
                <div className="blog__info">
                    <a className="time" href="">{this.state.tags.map}</a>
                    <ul className="tag-list clearfix">
                    {
                        this.state.tags.map(function (item) {
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
