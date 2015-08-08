var React = require('react');
var BlogBlock = require('../blog/big-block.jsx');

var Index = React.createClass({
   render: function () {
       var s = [1,1,1,1,1,1,1,1,1,];

		return (
			<div>
                {s.map(function () {
                    return <BlogBlock />;
                })}
			</div>
			);
		}
});

module.exports = Index;