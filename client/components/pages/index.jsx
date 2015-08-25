/*
var React = require('react');
var BlogBlock = require('../blog/big-block.jsx');
var Reflux = require('reflux');
var BlogStore = require('../../stores/blogStore');

var Index = React.createClass({
    mixins: [Reflux.connect(BlogStore, 'blogList')],

    getInitialState: function () {
        return {
            blogList: []
        };
    },

    render: function () {
        return (
            <div className="pg-index container">
                {this.state.blogList.map(function () {
                    return <BlogBlock />;
                })}
            </div>
        );
    }
});

module.exports = Index;
 * u
*/
var Reflux = require('reflux');
var React = require('react');
var request = require('superagent');

var UserAction = Reflux.createActions({
    'login': {children: ['success', 'failed']}
});

UserAction.login.listen(function(data) {
    request
    .get('/blogs')
    .end(function (err, res) {
        if(err) {
            console.log(err);
            that.faild(err);
        }

        if (res) {
            that.completed(res);
        }
    });
});

var UserStore = Reflux.createStore({
    listenables: UserAction,
    onLoginSuccess: function(payload) {
        this.trigger(payload);
    },
    onLoginFailed: function(payload) {
        this.trigger(payload);
    }
});

var Index = React.createClass({
    mixins: [Reflux.connect(UserStore, 'user')],
    render: function() {
        console.log(this.state);
        return <span>123</span>;
    }
});

module.exports = Index;