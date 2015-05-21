var React = require('react');
var TodoItem = require('./TodoItem');
var TodoStatus = require('./TodoStatus');
var _ = require('lodash');

function renderItem(item) {
  return <TodoItem item={item} key={item.id}/>
}

var TodoList = React.createClass({
  render: function () {
    var items = this.props.items;

    return (
      <div>
        <ul>
          <li><input type="text"/></li>
          {_.map(items, renderItem)}
        </ul>

        <hr/>

        <TodoStatus items={items}/>
      </div>
    );
  }
});

module.exports = TodoList;
