import React from 'react';
import injectStyles from 'react-jss';
import PropTypes from 'prop-types';

const styles = theme => ({
  input: {
    border: `1px solid ${theme.colors.header}`,
    '&::placeholder': theme.colors.header,
    padding: '1em',
    borderRadius: '.25em',
    width: '95%',
  },
});

const Input = ({ classes, type, placeholder, value, onChange }) => (
  <input
    className={classes.input}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={event => onChange(event.target.value)}
  />
);

Input.propTypes = {
  classes: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default injectStyles(styles)(Input);
