import React, { PureComponent } from 'react';
import './App.css';
import { TodoList } from './TodoList';

class App extends PureComponent {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
