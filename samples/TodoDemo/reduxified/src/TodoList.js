import React from 'react';
import { TodoItem } from './TodoItem';
import { NewItemEntry } from './NewItemEntry';
import './TodoList.css';
import { connect } from 'react-redux';
import { changeDone, addTodo } from './reducers/todoReducer';

const TodoList = ({ items, itemDoneChanged, newItem }) => (
  <div className="list-frame">
    <fieldset>
      <legend>Todo List</legend>
      <div>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            done={item.done}
            text={item.text}
            doneChanged={d => itemDoneChanged(index, d)}
          />
        ))}
      </div>
      <div>
        <NewItemEntry onNewItem={newItem} />
      </div>
    </fieldset>
  </div>
);

const stateToProps = state => ({ items: state.todos });
const dispatchToProps = dispatch => ({
  itemDoneChanged: (index, newDone) => dispatch(changeDone(index, newDone)),
  newItem: text => dispatch(addTodo(text))
});
const ConnectedTodoList = connect(
  stateToProps,
  dispatchToProps
)(TodoList);

export { ConnectedTodoList as TodoList };
