import React, { PureComponent } from 'react';
import Immutable from 'seamless-immutable';
import TodoItem from './TodoItem';

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
  }

  itemDoneChanged(index, newDone) {
    this.setState({
      items: this.state.items.setIn([index, 'done'], newDone)
    });
  }

  render() {
    return (
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
    );
  }
}

export default TodoList;
