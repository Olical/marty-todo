var React = require('react');
var _ = require('lodash');

var TodoStatus = React.createClass({
  render: function () {
    var items = this.props.items;
    var isDone = _.matchesProperty('done', true);
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
