var React = require('react');
var moment = require('moment');

module.exports = React.createClass({
	getInitialState: function () {
		// 伪造数据
		return {
			title: '博客名',
			link: 'http://baidu.com',
			summary: '简介简介简介简介简介简介简介简介简介简介简介简介简介简介',
			content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
			tags: ['测试', '测试试试', 'sss'],
			date: new Date(),
		};
	},

	render: function () {
        var date = moment(this.state.date).format('MMM D YYYY');

		return (
			<div className="blog-block">
				<h5 className="blog-block__title"><a href={'"' + this.state.href +'"'} target="_blank">{this.state.title}</a></h5>
				<div className="blog-block__content">
					<a href={'"' + this.state.href + '"'} target="_blank">{this.state.content}</a>
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