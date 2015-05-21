var React = require('react');
var TodoListActionCreators = require('../actions/TodoListActionCreators');

var TodoItem = React.createClass({
  render: function () {
    var item = this.props.item;

    return (
      <li><input type="checkbox" checked={item.done} onChange={this.updateItem}/> {item.content}</li>
    );
  },
  updateItem: function () {
    var item = this.props.item;
    TodoListActionCreators.updateItem(item.id, !item.done);
  }
});

module.exports = TodoItem;
