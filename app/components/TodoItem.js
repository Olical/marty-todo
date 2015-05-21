var React = require('react');

var TodoItem = React.createClass({
  render: function () {
    var item = this.props.item;

    return (
      <li><input type="checkbox" checked={item.done}/> {item.content}</li>
    );
  }
});

module.exports = TodoItem;
