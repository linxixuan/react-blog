var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Nav = React.createClass({
    render: function () {
        return (
            <nav className="navbar">
                <div className="container">
                    <ul className="navbar-list">
                        <li className="navbar-item"><Link className="navbar-link" to="index">首页</Link></li>
                        <li className="navbar-item"><Link className="navbar-link" to="history">归档</Link></li>
                        <li className="navbar-item"><Link className="navbar-link" to="about">关于我</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Nav;
