var React = require('react');
var TodoList = require('../components/TodoList');

var Home = React.createClass({
  render: function () {
    return (
      <TodoList/>
    );
  }
});

module.exports = Home;