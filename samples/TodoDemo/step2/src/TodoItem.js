import React, { Component } from 'react';
import './TodoItem.css';

export class TodoItem extends Component {
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
