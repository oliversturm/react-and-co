import React, { PureComponent } from 'react';
import Immutable from 'seamless-immutable';
import TodoItem from './TodoItem';
import NewItemEntry from './NewItemEntry';

import './TodoList.css';

class TodoList extends PureComponent {
  constructor(props) {
    super(props);

    // could load initial state from props if needed
    this.state = Immutable({
      items: [
        { done: true, text: 'Come to Basta' },
        { done: false, text: 'Learn about React' }
      ]
    });

    this.newItem = this.newItem.bind(this);
  }

  itemDoneChanged(index, newDone) {
    this.setState({
      items: this.state.items.setIn([index, 'done'], newDone)
    });
  }

  newItem(text) {
    this.setState({ items: this.state.items.concat([{ done: false, text }]) });
  }

  render() {
    return (
      <div className="list-frame">
        <fieldset>
          <legend>Todo List</legend>
          <div>
            {this.state.items.map((item, index) => (
              <TodoItem
                key={index}
                done={item.done}
                text={item.text}
                doneChanged={d => this.itemDoneChanged(index, d)}
              />
            ))}
          </div>
          <div>
            <NewItemEntry onNewItem={this.newItem} />
          </div>
        </fieldset>
      </div>
    );
  }
}

export default TodoList;
