var React = require('react');
var BlogBlock = require('./blog/big-block.jsx');

var App = React.createClass({
   render: function () {
		return (
			<div>
				<div class="header">
				</div>
				<BlogBlock />
			</div>
			);
		}
});