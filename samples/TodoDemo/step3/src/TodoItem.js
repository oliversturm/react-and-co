import React, { PureComponent } from 'react';
import './TodoItem.css';

export class TodoItem extends PureComponent {
  render() {
    const { done, doneChanged, text } = this.props;
    return (
      <div>
        <input
          type="checkbox"
          checked={done}
          onChange={e => doneChanged && doneChanged(e.target.checked)}
        />
        <span className={done ? 'done' : 'todo'}>{text}</span>
      </div>
    );
  }
}
