import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

class TodoList extends PureComponent {
  render() {
    return (
      <div>
        {this.props.items.map((item, index) => (
          <TodoItem key={index} done={item.done} text={item.text} />
        ))}
      </div>
    );
  }
}

export default TodoList;
