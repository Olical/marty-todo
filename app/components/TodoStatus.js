var React = require('react');
var _ = require('lodash');

function isDone(item) {
  return item.done;
}

var TodoStatus = React.createClass({
  render: function () {
    var items = this.props.items;
    var remainingCount = _.size(_.reject(items, isDone));

    return (
      <ul>
        <li>{remainingCount} items left.</li>
        <li><button>Clear completed</button></li>
      </ul>
    );
  }
});

module.exports = TodoStatus;
