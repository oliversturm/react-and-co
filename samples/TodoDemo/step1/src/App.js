import React, { Component } from 'react';
import './App.css';
import { TodoItem } from './TodoItem';

class App extends Component {
  render() {
    return (
      <div>
        <TodoItem done={true} text="Come to Basta" />
      </div>
    );
  }
}

export default App;
