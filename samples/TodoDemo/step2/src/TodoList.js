import React, { Component } from 'react';
import { TodoItem } from './TodoItem';

export class TodoList extends Component {
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
