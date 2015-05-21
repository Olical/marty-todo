var Marty = require('marty');
var React = require('react');
var TodoItem = require('./TodoItem');
var TodoStatus = require('./TodoStatus');
var TodoListStore = require('../stores/TodoListStore');
var TodoListActionCreators = require('../actions/TodoListActionCreators');
var _ = require('lodash');

function renderItem(item) {
  return <TodoItem item={item} key={item.id}/>;
}

var TodoList = React.createClass({
  getInitialState: function () {
    return {
      nextContent: ''
    };
  },
  createItem: function () {
    var content = this.state.nextContent;

    if (content) {
      TodoListActionCreators.createItem(content, false);
      this.setState({
        nextContent: ''
      });
    }
  },
  updateNextContent: function (e) {
    this.setState({
      nextContent: e.target.value
    });
  },
  render: function () {
    var items = this.props.items;

    return (
      <div>
        <ul>
          <li>
            <input type="text" value={this.state.nextContent} onChange={this.updateNextContent}/>
            <button onClick={this.createItem}>Create</button>
          </li>
          {_.map(items, renderItem)}
        </ul>

        <hr/>

        <TodoStatus items={items}/>
      </div>
    );
  }
});

module.exports = Marty.createContainer(TodoList, {
  listenTo: TodoListStore,
  fetch: {
    items: function () {
      return TodoListStore.for(this).getItems();
    }
  }
});
