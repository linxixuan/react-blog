var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Index = require('./pages/index.jsx');
var History = require('./pages/history.jsx');
var About = require('./pages/about.jsx');
var BlogPage = require('./pages/blog.jsx');

var Nav = require('./commmon/nav.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Nav />
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
        <Route name="blog" handler={BlogPage} />
        <DefaultRoute handler={Index}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.body);
});
