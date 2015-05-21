var Marty = require('marty');
var TodoListConstants = require('../constants/TodoListConstants');

var TodoListActionCreators = Marty.createActionCreators({
  id: 'TodoListActionCreators',
  createItem: function (content, done) {
    this.dispatch(TodoListConstants.CREATE, content, done);
  },
  updateItem: function (id, done) {
    this.dispatch(TodoListConstants.UPDATE, id, done);
  },
  clearDone: function () {
    this.dispatch(TodoListConstants.CLEAR_DONE);
  }
});

module.exports = TodoListActionCreators;
