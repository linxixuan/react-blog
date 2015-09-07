var React = require('react');

var Basic = React.createClass({
    render: function() {
        return (
            <div className="block block--basic">
                <h2>基本信息</h2>
                <p>本名张梦轩，89年生，双鱼座，出生于江西某个小县城的农场。是最后一批童年里没有电脑的80后。从小看漫画、笑话故事，长于插科打诨，爱好写段子，以逗乐大家为己任。</p>
                <p>研究生毕业于浙大软件工程专业，2012年4月开始把编码作为常态，因实习部门技术框架切换转而接触前端。</p>
                <p>宅居动物，爱好音乐，漫画，游戏，电影。</p>
                <p>目前在有赞从事前端工作，经常接触的有PHP、SASS、NodeJS、Backbone。正在学习react、gulp、webpack、koa。</p>
            </div>
        );
    }
});

var Contact = React.createClass({
    render: function() {
        return (
            <dl className="block block--contact">
                <h2>联系方式</h2>
                <dt>邮箱：</dt>
                <dd>
                    <a href="mailto:zmx.morgan@gmail.com">zmx.morgan@gmail.com</a>
                </dd>
                <dt>微博：<dt>
                <dd>
                    <a href="http://weibo.com/yuanjingdi" target="_blank">weibo.com/yuanjingdi</a>
                </dd>
                <dt>github:</dt>
                <dd>
                    <a href="http://github.com/linxixuan" target="_blank">github.com/linxixuan</a>
                </dd>
                <dt>segmentfault</dt>
                <dd>
                    <a href="http://segmentfault.com/u/linxixuan" target="_blank">segmentfault.com/u/linxixuan</a>
                </dd>
            </dl>
        );
    }
});

var Project = React.createClass({
    render: function() {
        return (
            <dl className="block block--project">
                <h2>小项目：</h2>
                <dt>我的豆瓣</dt>
                <dd>专为长篇技术文档设计：针对一个url添加阅读锚点方便下次阅读；夜间模式，使用solarized dark配色，减少阅读文档时眼睛的不适感。</dd>
                <dt>个人信息记录</dt>
                <dd>使用微信公共账号接收信息并保存，通过页面展现统计信息。示例：<a href="/track">http:zmx.im/track</a></dd>
            </dl>
        );
    }
});

var About = React.createClass({
    render: function () {
        return (
            <div className="pg-history">
                <Basic />
                <Project />
                <iframe src="http://mars.nasa.gov/participate/send-your-name/orion-first-flight/?action=getcert&e=1&cn=957469" width="750" height="307" scrolling="no" frameBorder="0"></iframe>
            </div>
        );
    }
});

module.exports = About;
