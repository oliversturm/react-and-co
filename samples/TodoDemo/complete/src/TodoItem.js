import React, { Component } from 'react';
import './TodoItem.css';
import PropTypes from 'prop-types';

class TodoItem extends Component {
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

TodoItem.propTypes = {
  done: PropTypes.bool,
  text: PropTypes.string.isRequired,
  doneChanged: PropTypes.func
};

export { TodoItem };
