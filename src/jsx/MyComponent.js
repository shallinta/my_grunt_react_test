/**
 * @jsx React.DOM
 */
require('react');

var MyComponent = React.createClass({displayName: "MyComponent",
	render: function() {
		return (
			React.createElement("p", null, "Hello World!")
		);
	}
});
