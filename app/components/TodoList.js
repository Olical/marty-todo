var React = require('react');
var TodoItem = require('./TodoItem');
var TodoStatus = require('./TodoStatus');

var TodoList = React.createClass({
  render: function () {
    return (
      <TodoItem/>
      <TodoStatus/>
    );
  };
})

module.exports = TodoList;
