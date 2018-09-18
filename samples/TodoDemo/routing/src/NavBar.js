import React from 'react';
import { connect } from 'react-redux';
import './NavBar.css';

const NavBar = ({ location, showTodos, showOther }) => (
  <div>
    <button
      className={location === 'TODOS' ? 'current' : ''}
      onClick={() => showTodos()}
    >
      TODOs
    </button>
    <button
      className={location === 'OTHERFUNC' ? 'current' : ''}
      onClick={() => showOther()}
    >
      Other stuff
    </button>{' '}
  </div>
);

const stateToProps = state => ({ location: state.location.type });
const dispatchToProps = dispatch => ({
  showTodos: () => dispatch({ type: 'TODOS' }),
  showOther: () => dispatch({ type: 'OTHERFUNC' })
});
const ConnectedNavBar = connect(
  stateToProps,
  dispatchToProps
)(NavBar);

export { ConnectedNavBar as NavBar };
