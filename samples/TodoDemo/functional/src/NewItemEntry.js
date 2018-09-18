import React from 'react';
import { compose, defaultProps, withHandlers, setPropTypes } from 'recompose';
import PropTypes from 'prop-types';

const enhance = compose(
  defaultProps({ onNewItem: () => undefined }),
  withHandlers({
    onKeyPress: ({ onNewItem }) => e => {
      if (e.key === 'Enter') {
        onNewItem(e.target.value);
        e.target.value = '';
      }
    }
  }),
  setPropTypes({ onNewItem: PropTypes.func })
);

const NewItemEntry = enhance(({ onKeyPress }) => (
  <label>
    New Item:&nbsp;
    <input type="text" onKeyPress={onKeyPress} />
  </label>
));

export { NewItemEntry };
