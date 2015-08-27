var React = require('react');

var Disqus = React.createClass({
    render: function() {
        return (
            <div>
                <div id="disqus_thread"></div>
            </div>
        );
    }
});

module.exports = Disqus;
