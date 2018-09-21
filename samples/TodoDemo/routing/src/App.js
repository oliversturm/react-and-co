import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { TodoList } from './TodoList';
import { NavBar } from './NavBar';

const OtherFunc = () => <div>Placeholder for other cool functionality!</div>;
const NotFound = () => <div>The URL couldn't be found</div>;

const locationMap = {
  TODOS: () => <TodoList />,
  OTHERFUNC: () => <OtherFunc />
};

const mapLocation = location => locationMap[location] || NotFound;

const App = ({ location }) => (
  <div>
    <NavBar />
    {mapLocation(location)()}
  </div>
);

const stateToProps = state => ({ location: state.location.type });
const ConnectedApp = connect(stateToProps)(App);

export { ConnectedApp as App };
