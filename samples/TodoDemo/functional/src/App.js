import React from 'react';
import './App.css';
import TodoList from './TodoList';

const App = React.memo(() => (
  <div>
    <TodoList />
  </div>
));

export default App;
