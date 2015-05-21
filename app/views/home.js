var React = require('react');
var TodoList = require('../components/TodoList');
var _ = require('lodash');

function createItem(content, done) {
  return {
    id: _.uniqueId('todo_list_item_'),
    content: content,
    done: done
  }
}

var Home = React.createClass({
  render: function () {
    var items = [
      createItem('Build a todo list application with Marty', false),
      createItem('Finish BOTH the seven languages in seven weeks books', false),
      createItem('Finish nand2tetris', true),
      createItem('Read "Out Of The Tarpit" again, keep that thing fresh', false)
    ]

    return (
      <TodoList items={items}/>
    );
  }
});

module.exports = Home;