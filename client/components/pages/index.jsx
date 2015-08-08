var React = require('react');
var BlogBlock = require('../blog/big-block.jsx');

var Index = React.createClass({
   render: function () {
		return (
			<div>
                <BlogBlock />
			</div>
			);
		}
});

module.exports = Index;