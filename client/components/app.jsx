var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Index = require('./pages/index.jsx');
var History = require('./pages/history.jsx');
var About = require('./pages/about.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="index">首页</Link></li>
                        <li><Link to="history">归档</Link></li>
                        <li><Link to="about">关于我</Link></li>
                    </ul>
                </header>
                <RouteHandler />
            </div>
        );
    }
});

var routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="index" handler={Index} />
        <Route name="history" handler={History} />
        <Route name="about" handler={About} />
        <DefaultRoute handler={Index}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});
