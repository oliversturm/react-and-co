import React, { PureComponent } from 'react';
import './App.css';
import { TodoItem } from './TodoItem';

class App extends PureComponent {
  render() {
    return (
      <div>
        <TodoItem done={true} text="Come to Basta" />
      </div>
    );
  }
}

export default App;
