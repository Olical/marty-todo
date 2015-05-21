var React = require('react');
var TodoListActionCreators = require('../actions/TodoListActionCreators');
var _ = require('lodash');

var TodoStatus = React.createClass({
  clearCompleted: function () {
    TodoListActionCreators.clearDone();
  },
  render: function () {
    var items = this.props.items;
    var isDone = _.matchesProperty('done', true);
    var remainingCount = _.size(_.reject(items, isDone));

    return (
      <ul>
        <li>{remainingCount} items left.</li>
        <li><button onClick={this.clearCompleted}>Clear completed</button></li>
      </ul>
    );
  }
});

module.exports = TodoStatus;
