import React from 'react';
import injectStyles from 'react-jss';

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

export default injectStyles(styles)(Input);
