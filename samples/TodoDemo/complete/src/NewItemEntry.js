import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NewItemEntry extends PureComponent {
  constructor(props) {
    super(props);

    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onNewItem && this.props.onNewItem(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
      <label>
        New Item:&nbsp;
        <input type="text" onKeyPress={this.onKeyPress} />
      </label>
    );
  }
}

NewItemEntry.propTypes = {
  onNewItem: PropTypes.func
};

export { NewItemEntry };
