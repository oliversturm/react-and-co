import React, { PureComponent } from 'react';
import './App.css';
import { TodoList } from './TodoList';

class App extends PureComponent {
  render() {
    return (
      <div>
        <TodoList
          items={[
            { done: true, text: 'Come to Basta' },
            { done: false, text: 'Learn about React' }
          ]}
        />
      </div>
    );
  }
}

export default App;
