import React from 'react';
import { compose, withState, withHandlers } from 'recompose';
import Immutable from 'seamless-immutable';
import { TodoItem } from './TodoItem';
import { NewItemEntry } from './NewItemEntry';
import './TodoList.css';

const enhance = compose(
  withState(
    'items',
    'setItems',
    Immutable([
      { done: true, text: 'Attend Basta' },
      { done: false, text: 'Learn about React' }
    ])
  ),
  withHandlers({
    itemDoneChanged: ({ setItems }) => (index, newDone) =>
      setItems(items => items.setIn([index, 'done'], newDone)),
    newItem: ({ setItems }) => text =>
      setItems(items => items.concat({ done: false, text }))
  })
);

const TodoList = enhance(({ items, itemDoneChanged, newItem }) => (
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
));

export { TodoList };
