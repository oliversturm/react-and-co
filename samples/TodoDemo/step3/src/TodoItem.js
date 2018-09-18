import React, { Component } from 'react';
import './TodoItem.css';

export class TodoItem extends Component {
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
