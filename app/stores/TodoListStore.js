var Marty = require('marty');
var TodoListConstants = require('../constants/TodoListConstants');
var _ = require('lodash');

function createItem(content, done) {
  return {
    id: _.uniqueId('todo_list_item_'),
    content: content,
    done: done
  };
}

var TodoListStore = Marty.createStore({
  id: 'TodoListStore',
  handlers: {
    createItem: TodoListConstants.CREATE,
    updateItem: TodoListConstants.UPDATE,
    clearDone: TodoListConstants.CLEAR_DONE
  },
  getInitialState: function () {
    return {
      items: [
        createItem('Build a todo list application with Marty', false),
        createItem('Finish BOTH the seven languages in seven weeks books', false),
        createItem('Finish nand2tetris', true),
        createItem('Read "Out Of The Tarpit" again, keep that thing fresh', false)
      ]
    };
  },
  getItem: function (id) {
    return _.find(this.state, _.matchesProperty('id', id));
  },
  createItem: function (content, done) {
    this.state.items.push(createItem(content, done));
  },
  updateItem: function (id, done) {
    var item = this.getItem(id);
    item.done = done;
    this.hasChanged();

    // Mutable state :(
    // Would love to try this with ImmutableJS some day.
    // Just don't have time right now.
  },
  clearDone: function () {
    this.state.items = _.filter(this.state.items, _.matchesProperty('done', true));
    this.hasChanged();
  },
  getItems: function () {
    return _.cloneDeep(this.state.items);
  }
});

module.exports = TodoListStore;
