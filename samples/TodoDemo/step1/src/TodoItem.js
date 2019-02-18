import React, { PureComponent } from 'react';
import './TodoItem.css';

class TodoItem extends PureComponent {
  render() {
    const { done, text } = this.props;
    return (
      <div>
        <input type="checkbox" checked={done} />
        <span className={done ? 'done' : 'todo'}>{text}</span>
      </div>
    );
  }
}

export default TodoItem;
